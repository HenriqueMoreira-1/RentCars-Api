import { RolesRepository } from "@roles/repositories/rolesrepository"
import { ListRolesUseCase } from "./listRoleUseCase"
import { ListRolesController } from "./listRoleController"

const rolesRepository = new RolesRepository()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
