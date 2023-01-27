import { Router } from "express"
import { CreateSpecificationController } from "src/cars/useCases/createSpecification/CreateSpecificationController"

export const specificationsRoutes = Router()

const createSpecificationsController = new CreateSpecificationController()
specificationsRoutes.post("/", createSpecificationsController.handle)
