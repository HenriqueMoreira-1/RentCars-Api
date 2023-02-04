import { Router } from "express"
import { CreateCarController } from "../../../../cars/useCases/createCar/CreateCarController"
import { createCarRouteValidation } from "@shared/infra/validation/cars"

export const carsRoutes = Router()

const createCarController = new CreateCarController()

carsRoutes.post("/", createCarRouteValidation, createCarController.handle)
