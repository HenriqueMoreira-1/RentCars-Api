import { Router } from "express"
import { CreateSpecificationController } from "src/cars/useCases/createSpecification/CreateSpecificationController"
import { ensureAuthenticated } from "src/middlewares/ensureAuthenticated"

export const specificationsRoutes = Router()

const createSpecificationsController = new CreateSpecificationController()
specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationsController.handle)
