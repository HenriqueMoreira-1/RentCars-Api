import { Router } from "express"
import { CreateCarController } from "../../../../cars/useCases/createCar/CreateCarController"
import { createCarRouteValidation } from "@shared/infra/validation/cars"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { ListAvailableCarsController } from "src/cars/useCases/listAvailableCars/ListAvailableCarsController"

export const carsRoutes = Router()

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarRouteValidation, createCarController.handle)
carsRoutes.get("/available", listAvailableCarsController.handle)
