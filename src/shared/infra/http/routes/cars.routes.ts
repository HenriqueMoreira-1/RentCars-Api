import { Router } from "express"
import { CreateCarController } from "../../../../cars/useCases/createCar/CreateCarController"
import { createCarRouteValidation } from "@shared/infra/validation/cars"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ensureAdmin } from "../middlewares/ensureAdmin"

export const carsRoutes = Router()

const createCarController = new CreateCarController()

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarRouteValidation, createCarController.handle)
