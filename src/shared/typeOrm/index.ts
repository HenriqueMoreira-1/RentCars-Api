import { Role } from "@roles/entities/role"
import { DataSource } from "typeorm"
import { CreateRolesTable1673793794633 } from "./migrations/1673793794633-CreateRolesTable"
import { Category } from "src/cars/entities/category"
import { CreateCategory1674672942997 } from "./migrations/1674672942997-CreateCategory"
import { Specification } from "src/cars/entities/specifications"
import { CreateSpecification1674673739060 } from "./migrations/1674673739060-CreateSpecification"
import { CreateUsers1674811301688 } from "./migrations/1674811301688-CreateUsers"
import { User } from "src/accounts/entities/User"

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, Category, Specification, User],
  migrations: [CreateRolesTable1673793794633, CreateCategory1674672942997, CreateSpecification1674673739060, CreateUsers1674811301688],
  synchronize: true,
})
