import { container } from "tsyringe"

import { ICategoriesRepository } from "src/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "src/cars/repositories/implementations/CategoriesRepository"
import { ISpecificationsRepository } from "src/cars/repositories/ISpecificationsRepository"
import { SpecificationsRepository } from "src/cars/repositories/implementations/SpecificationsRepository"

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository)
