import { Specification } from "src/cars/entities/specifications"
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository"
import { Repository } from "typeorm"
import { dataSource } from "@shared/typeOrm"

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = dataSource.getRepository(Specification)
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    })

    await this.repository.save(specification)
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name })
    return specification
  }
}
