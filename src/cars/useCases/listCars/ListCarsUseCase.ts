import { Car } from "src/cars/infra/typeorm/entities/car"
import { ICarsRepository } from "src/cars/repositories/ICarsRepository"

interface IRequest {
  brand?: string
  category_id?: string
  name?: string
}

export class ListCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAllAvailable(brand, category_id, name)
    return cars
  }
}
