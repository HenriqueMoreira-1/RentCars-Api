import { Router } from "express"
import { CreateSpecificationController } from "src/cars/useCases/createSpecification/CreateSpecificationController"
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated"
import { createSpecificationRouteValidation } from "@shared/infra/validation/specifications"
import { ensureAdmin } from "../middlewares/ensureAdmin"

export const specificationsRoutes = Router()

const createSpecificationsController = new CreateSpecificationController()
specificationsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationRouteValidation,
  createSpecificationsController.handle,
)
