import { Car } from "src/cars/infra/typeorm/entities/car"
import { ICarsRepository } from "src/cars/repositories/ICarsRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  brand?: string
  category_id?: string
  name?: string
}

@injectable()
export class ListAvailableCarsUseCase {
  constructor(@inject("CarsRepository") private carsRepository: ICarsRepository) {}

  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAllAvailable(brand, category_id, name)
    return cars
  }
}
