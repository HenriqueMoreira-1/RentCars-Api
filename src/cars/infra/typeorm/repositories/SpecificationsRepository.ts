import { Specification } from "../entities/specifications"
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../../repositories/ISpecificationsRepository"
import { In, Repository } from "typeorm"
import { dataSource } from "../../../../shared/infra/typeorm"

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = dataSource.getRepository(Specification)
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    })
    await this.repository.save(specification)

    return specification
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOneBy({ name })
    return specification
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findBy({ id: In(ids) })
    return specifications
  }
}
