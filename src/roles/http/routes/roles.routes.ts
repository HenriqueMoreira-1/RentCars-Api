import { RolesRepository } from "@roles/repositories/rolesrepository"
import { createRolesController } from "@roles/useCases/createRole"
import { Router } from "express"

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post("/", (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get("/", (request, response) => {
  const roles = rolesRepository.findAll()

  return response.status(200).json(roles)
})

export { rolesRouter }
