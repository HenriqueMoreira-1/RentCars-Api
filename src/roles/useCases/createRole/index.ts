import { RolesRepository } from "@roles/repositories/rolesrepository"
import { CreateRoleUseCase } from "./createRoleUseCase"
import { CreateRoleController } from "./createRoleController"

const rolesRepository = new RolesRepository()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleController(createRoleUseCase)
