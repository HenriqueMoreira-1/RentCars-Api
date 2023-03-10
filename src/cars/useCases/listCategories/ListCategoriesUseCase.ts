import { Category } from "src/cars/infra/typeorm/entities/category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { inject, injectable } from "tsyringe"

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()
    return categories
  }
}
