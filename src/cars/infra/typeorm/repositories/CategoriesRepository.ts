import { Category } from "src/cars/infra/typeorm/entities/category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../../../repositories/ICategoriesRepository"
import { Repository } from "typeorm"
import { dataSource } from "../../../../shared/infra/typeorm"
export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = dataSource.getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOneBy({ name })
    return category
  }
}
