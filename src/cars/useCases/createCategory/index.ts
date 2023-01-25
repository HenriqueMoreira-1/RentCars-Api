import { CategoriesRepository } from "src/cars/repositories/implementations/CategoriesRepository"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import { CreateCategoryController } from "./CreateCategoryController"

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryUseCase)