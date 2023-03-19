import { Router } from "express"
import { CreateRentalController } from "src/rentals/useCases/CreateRentalController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

export const rentalRoutes = Router()

const createRentalController = new CreateRentalController()

rentalRoutes.post("/rentals", ensureAuthenticated, createRentalController.handle)
