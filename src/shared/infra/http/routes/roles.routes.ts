import { Router } from "express"
import { CreateRoleController } from "@roles/useCases/createRole/createRoleController"
import { ListRolesController } from "@roles/useCases/listRoles/listRolesController"
import { ShowRoleController } from "@roles/useCases/showRole/showRoleController"
import { UpdateRoleController } from "@roles/useCases/updateRole/updateRoleController"
import { DeleteRoleController } from "@roles/useCases/deleteRole/deleteRoleController"
import {
  changeRoleRouteValidation,
  createRoleRouteValidation,
  deleteRoleRouteValidation,
  listRolesRouteValidation,
  showRoleRouteValidation,
} from "@shared/infra/validation/roles"

export const rolesRouter = Router()

const createRoleController = new CreateRoleController()
const listRolesController = new ListRolesController()
const showRolesController = new ShowRoleController()
const updateRolesController = new UpdateRoleController()
const deleteRolesController = new DeleteRoleController()

rolesRouter.post("/", createRoleRouteValidation, createRoleController.handle)

rolesRouter.get("/", listRolesRouteValidation, listRolesController.handle)

rolesRouter.get("/:id", showRoleRouteValidation, showRolesController.handle)

rolesRouter.put("/:id", changeRoleRouteValidation, updateRolesController.handle)

rolesRouter.delete("/:id", deleteRoleRouteValidation, deleteRolesController.handle)
