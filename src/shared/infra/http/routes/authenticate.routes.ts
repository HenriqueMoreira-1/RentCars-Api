import { Router } from "express"
import { AuthenticateUserController } from "src/accounts/useCases/authenticateUser/AuthenticateUserController"

export const authenticateRoutes = Router()

const authenticateUserContoller = new AuthenticateUserController()

authenticateRoutes.post("/sessions", authenticateUserContoller.handle)
