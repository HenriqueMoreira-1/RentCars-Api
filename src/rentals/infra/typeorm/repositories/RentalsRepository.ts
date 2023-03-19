import { ICreateRentalDTO } from "src/rentals/dtos/ICreateRentalDTO"
import { IRentalsRepository } from "src/rentals/repositories/IRentalsRepository"
import { Rental } from "../entities/rental"
import { Repository } from "typeorm"
import { dataSource } from "@shared/infra/typeorm"

export class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = dataSource.getRepository(Rental)
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.repository.findOneBy({ car_id })
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.repository.findOneBy({ user_id })
  }

  async create({ car_id, expected_return_date, user_id }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({ car_id, expected_return_date, user_id })
    await this.repository.save(rental)

    return rental
  }
}
