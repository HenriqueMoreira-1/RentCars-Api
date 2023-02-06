import { Car } from "../../infra/typeorm/entities/car"
import { AppError } from "../../../shared/errors/AppError"
import { ICarsRepository } from "src/cars/repositories/ICarsRepository"
import { ISpecificationsRepository } from "src/cars/repositories/ISpecificationsRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  car_id: string
  specifications_id: string[]
}

@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findById(car_id)

    if (!carAlreadyExists) {
      throw new AppError("Car does not exists!")
    }

    const specifications = await this.specificationsRepository.findByIds(specifications_id)

    carAlreadyExists.specifications = specifications

    await this.carsRepository.create(carAlreadyExists)

    return carAlreadyExists
  }
}
