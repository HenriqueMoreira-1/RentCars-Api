import { Role } from "@roles/entities/role"
import { DataSource } from "typeorm"
import { CreateRolesTable1673793794633 } from "./migrations/1673793794633-CreateRolesTable"
import { Category } from "src/cars/infra/typeorm/entities/category"
import { CreateCategory1674672942997 } from "./migrations/1674672942997-CreateCategory"
import { Specification } from "src/cars/infra/typeorm/entities/specifications"
import { CreateSpecification1674673739060 } from "./migrations/1674673739060-CreateSpecification"
import { User } from "src/accounts/infra/typeorm/entities/User"
import { AlterUserAddAvatar1675113522881 } from "./migrations/1675113522881-AlterUserAddAvatar"
import { CreateUsers1675180591964 } from "./migrations/1675180591964-CreateUsers"
import { CreateCars1675335365090 } from "./migrations/1675335365090-CreateCars"

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, Category, Specification, User],
  migrations: [
    CreateRolesTable1673793794633,
    CreateCategory1674672942997,
    CreateSpecification1674673739060,
    CreateUsers1675180591964,
    AlterUserAddAvatar1675113522881,
    CreateCars1675335365090,
  ],
  synchronize: true,
})
