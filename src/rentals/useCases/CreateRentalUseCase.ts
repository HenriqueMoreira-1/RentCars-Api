import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider"
import { AppError } from "../../shared/errors/AppError"
import { Rental } from "../infra/typeorm/entities/rental"
import { IRentalsRepository } from "../repositories/IRentalsRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  user_id: string
  car_id: string
  expected_return_date: Date
}

@injectable()
export class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("DayJsDateProvider")
    private dateProvider: IDateProvider,
  ) {}

  async execute({ car_id, expected_return_date, user_id }: IRequest): Promise<Rental> {
    const minimumAmountOfHours = 24
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id)

    if (carUnavailable) {
      throw new AppError("Car is unavailable")
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id)

    if (rentalOpenToUser) {
      throw new AppError("There's a rental in progress for user!")
    }

    const dateNow = this.dateProvider.dateNow()

    const compare = this.dateProvider.compareInHours(dateNow, expected_return_date)

    if (compare < minimumAmountOfHours) {
      throw new AppError("Invalid return time!")
    }

    const rental = await this.rentalsRepository.create({
      car_id,
      expected_return_date,
      user_id,
    })

    return rental
  }
}
