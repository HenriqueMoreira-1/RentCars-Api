import { RolesRepository } from "@roles/repositories/rolesrepository"
import { DeleteRoleUseCase } from "./deleteRoleUseCase"
import { DeleteRoleController } from "./deleteRoleController"

const rolesRepository = RolesRepository.getInstance()
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository)
export const deleteRolesController = new DeleteRoleController(deleteRoleUseCase)
