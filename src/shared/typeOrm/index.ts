import { Role } from "@roles/entities/role"
import { DataSource } from "typeorm"
import { CreateRolesTable1673793794633 } from "./migrations/1673793794633-CreateRolesTable"

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1673793794633],
  synchronize: true,
})