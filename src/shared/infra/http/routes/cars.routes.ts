import { Router } from "express"
import { CreateCarController } from "../../../../cars/useCases/createCar/CreateCarController"

export const carsRoutes = Router()

const createCarController = new CreateCarController()

carsRoutes.post("/", createCarController.handle)
