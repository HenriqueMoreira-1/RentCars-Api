import { Car } from "../../infra/typeorm/entities/car"
import { ICarsRepository } from "../ICarsRepository"
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO"

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  async create({ name, description, daily_rate, license_plate, fine_amount, brand, category_id }: ICreateCarDTO): Promise<void> {
    const car = new Car()

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    })

    this.cars.push(car)
  }
}
