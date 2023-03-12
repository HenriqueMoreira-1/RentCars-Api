import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { AppError } from "../../shared/errors/AppError"
import { Rental } from "../infra/typeorm/entities/rental"
import { IRentalsRepository } from "../repositories/IRentalsRepository"

dayjs.extend(utc)

interface IRequest {
  user_id: string
  car_id: string
  expected_return_date: Date
}

export class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

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
    const expectedReturnDateFormat = dayjs(expected_return_date).utc().local().format()
    const dateNow = dayjs().utc().local().format()
    const compare = dayjs(expectedReturnDateFormat).diff(dateNow, "hours")

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
