import { Router } from "express"
import { CreateRentalController } from "src/rentals/useCases/CreateRentalController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

export const rentalsRoutes = Router()

const createRentalController = new CreateRentalController()

rentalsRoutes.post("/", ensureAuthenticated, createRentalController.handle)
