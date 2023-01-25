import { CategoriesRepository } from "src/cars/repositories/implementations/CategoriesRepository"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"
import { ImportCategoryController } from "./ImportCategoryControlle"

const categoriesRepository = null
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
export const importCategoryController = new ImportCategoryController(importCategoryUseCase)
