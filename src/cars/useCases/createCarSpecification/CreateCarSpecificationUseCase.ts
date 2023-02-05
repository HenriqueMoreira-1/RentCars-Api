import { AppError } from "../../../shared/errors/AppError"
import { ICarsRepository } from "src/cars/repositories/ICarsRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  car_id: string
  specifications_id: string[]
}

// @injectable()
export class CreateCarSpecificationUseCase {
  constructor(/* @inject("CarsRepository") */ private carsRepository: ICarsRepository) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carAlreadyExists = await this.carsRepository.findById(car_id)

    if (!carAlreadyExists) {
      throw new AppError("Car does not exists!")
    }
  }
}
