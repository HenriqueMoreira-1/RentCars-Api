import { container } from "tsyringe"

import { ICategoriesRepository } from "src/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "src/cars/repositories/implementations/CategoriesRepository"

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)
