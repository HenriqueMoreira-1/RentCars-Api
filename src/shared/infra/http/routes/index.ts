import { Router } from "express"
import { rolesRouter } from "@shared/infra/http/routes/roles.routes"
import { categoriesRoutes } from "@shared/infra/http/routes/categories.routes"
import { usersRoutes } from "./users.routes"
import { authenticateRoutes } from "./authenticate.routes"
import { carsRoutes } from "./cars.routes"
import { specificationsRoutes } from "./specifications.routes"
import { rentalRoutes } from "./rental.routes"
const routes = Router()

routes.get("/", (request, response) => {
  return response.json({ message: "Olá!" })
})

routes.use("/roles", rolesRouter)
routes.use("/categories", categoriesRoutes)
routes.use("/specifications", specificationsRoutes)
routes.use("/users", usersRoutes)
routes.use("/cars", carsRoutes)
routes.use("/rentals", rentalRoutes)
routes.use(authenticateRoutes)
export { routes }
