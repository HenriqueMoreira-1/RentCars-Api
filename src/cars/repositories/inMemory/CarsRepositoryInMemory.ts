import { Car } from "../../infra/typeorm/entities/car"
import { ICarsRepository } from "../ICarsRepository"
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO"

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
      id,
    })

    this.cars.push(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate)
  }

  async findAllAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
    const all = this.cars.filter(car => {
      if (
        car.available == true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car
      }
      return null
    })

    return all
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find(car => car.id === id)
  }
}
