import { Repository } from "typeorm"
import { ICarsRepository } from "../../../repositories/ICarsRepository"
import { Car } from "../entities/car"
import { dataSource } from "../../../../shared/infra/typeorm"
import { ICreateCarDTO } from "src/cars/dtos/ICreateCarDTO"

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = dataSource.getRepository(Car)
  }

  async create({ brand, category_id, daily_rate, description, fine_amount, license_plate, name }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    })

    await this.repository.save(car)

    return car
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOneBy({ license_plate })
    return car
  }
}
