import { Role } from "@roles/entities/role"
import { DataSource } from "typeorm"
import { CreateRolesTable1673793794633 } from "./migrations/1673793794633-CreateRolesTable"
import { Category } from "src/cars/infra/typeorm/entities/category"
import { CreateCategory1674672942997 } from "./migrations/1674672942997-CreateCategory"
import { Specification } from "src/cars/infra/typeorm/entities/specifications"
import { CreateSpecification1674673739060 } from "./migrations/1674673739060-CreateSpecification"
import { User } from "src/accounts/infra/typeorm/entities/User"
import { AlterUserAddAvatar1675113522881 } from "./migrations/1675113522881-AlterUserAddAvatar"
import { CreateCars1675335365090 } from "./migrations/1675335365090-CreateCars"
import { Car } from "src/cars/infra/typeorm/entities/car"
import { CreateSpecificationsCars1675614968248 } from "./migrations/1675614968248-CreateSpecificationsCars"
import { CreateUsers1675103039848 } from "./migrations/1675103039848-CreateUsers"
import { CreateCarImages1676643312316 } from "./migrations/1676643312316-CreateCarImages"

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, Category, Specification, User, Car],
  migrations: [
    CreateRolesTable1673793794633,
    CreateCategory1674672942997,
    CreateSpecification1674673739060,
    CreateUsers1675103039848,
    AlterUserAddAvatar1675113522881,
    CreateCars1675335365090,
    CreateSpecificationsCars1675614968248,
    CreateCarImages1676643312316,
  ],
  synchronize: true,
})
