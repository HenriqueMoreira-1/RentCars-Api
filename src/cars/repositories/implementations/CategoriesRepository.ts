import { Category } from "src/cars/entities/category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"
import { Repository } from "typeorm"
import { dataSource } from "@shared/typeOrm"
export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  private static INSTANCE: CategoriesRepository

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
