import { container } from "tsyringe"

import "../container/providers"
import { ICategoriesRepository } from "src/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "src/cars/infra/typeorm/repositories/CategoriesRepository"
import { ISpecificationsRepository } from "src/cars/repositories/ISpecificationsRepository"
import { SpecificationsRepository } from "src/cars/infra/typeorm/repositories/SpecificationsRepository"
import { IUsersRepository } from "src/accounts/repositories/IUsersRepository"
import { UsersRepository } from "src/accounts/infra/typeorm/repositories/UsersRepository"
import { ICarsRepository } from "src/cars/repositories/ICarsRepository"
import { CarsRepository } from "../../cars/infra/typeorm/repositories/CarsRepository"
import { IRolesRepository } from "@roles/repositories/IRolesRepository"
import { RolesRepository } from "@roles/repositories/rolesrepository"
import { carsImagesRepository } from "src/cars/infra/typeorm/repositories/CarsImagesRepository"
import { ICarsImagesRepository } from "src/cars/repositories/ICarsImageRepository"
import { RentalsRepository } from "src/rentals/infra/typeorm/repositories/RentalsRepository"
import { IRentalsRepository } from "src/rentals/repositories/IRentalsRepository"

container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository)
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository)
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository)
container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository)
container.registerSingleton<IRolesRepository>("RolesRepository", RolesRepository)
container.registerSingleton<ICarsImagesRepository>("CarsImagesRepository", carsImagesRepository)
container.registerSingleton<IRentalsRepository>("RentalsRepository", RentalsRepository)
