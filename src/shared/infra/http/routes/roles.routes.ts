import { Router } from "express"
import { celebrate, Joi, Segments } from "celebrate"
import { CreateRoleController } from "@roles/useCases/createRole/createRoleController"
import { ListRolesController } from "@roles/useCases/listRoles/listRolesController"
import { ShowRoleController } from "@roles/useCases/showRole/showRoleController"
import { UpdateRoleController } from "@roles/useCases/updateRole/updateRoleController"
import { DeleteRoleController } from "@roles/useCases/deleteRole/deleteRoleController"

export const rolesRouter = Router()

const createRoleController = new CreateRoleController()
const listRolesController = new ListRolesController()
const showRolesController = new ShowRoleController()
const updateRolesController = new UpdateRoleController()
const deleteRolesController = new DeleteRoleController()

rolesRouter.post("/", celebrate({ [Segments.BODY]: Joi.object().keys({ name: Joi.string().required() }) }), createRoleController.handle)

rolesRouter.get("/", celebrate({ [Segments.QUERY]: Joi.object().keys({ page: Joi.number(), limit: Joi.number() }) }), listRolesController.handle)

rolesRouter.get("/:id", celebrate({ [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }) }), showRolesController.handle)

rolesRouter.put(
  "/:id",
  celebrate({ [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }), [Segments.BODY]: Joi.object().keys({ name: Joi.string().required() }) }),
  updateRolesController.handle,
)

rolesRouter.delete("/:id", celebrate({ [Segments.PARAMS]: Joi.object().keys({ id: Joi.string().uuid().required() }) }), deleteRolesController.handle)
