import { RolesRepository } from "@roles/repositories/rolesrepository"
import { UpdateRoleController } from "./updateRoleController"
import { UpdateRoleUseCase } from "./updateRoleUseCase"

const rolesRepository = RolesRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)
export const updateRolesController = new UpdateRoleController(updateRoleUseCase)
