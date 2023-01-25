import { Category } from "src/cars/entities/category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list()
    return categories
  }
}
