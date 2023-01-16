import { RolesRepository } from "@roles/repositories/rolesrepository"
import { ListRolesUseCase } from "./listRolesUseCase"
import { ListRolesController } from "./listRolesController"

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
