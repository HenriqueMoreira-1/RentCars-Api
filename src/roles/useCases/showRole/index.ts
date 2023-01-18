import { RolesRepository } from "@roles/repositories/rolesrepository"
import { ShowRoleUseCase } from "./showRoleUseCase"
import { ShowRoleController } from "./showRoleController"

const rolesRepository = RolesRepository.getInstance()
const showRoleUseCase = new ShowRoleUseCase(rolesRepository)
export const showRolesController = new ShowRoleController(showRoleUseCase)
