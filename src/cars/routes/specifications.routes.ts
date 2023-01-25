import { Router } from "express"
import { specificationsController } from "../useCases/createSpecification"

export const specificationsRoutes = Router()

specificationsRoutes.post("/", (request, response) => {
  return specificationsController.handle(request, response)
})
