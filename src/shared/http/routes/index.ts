import { Router } from "express"
import { rolesRouter } from "@roles/http/routes/roles.routes"
import { categoriesRoutes } from "src/cars/http/routes/categories.routes"
const routes = Router()

routes.get("/", (request, response) => {
  return response.json({ message: "Olá dev!" })
})

routes.use("/roles", rolesRouter)
routes.use("/categories", categoriesRoutes)
routes.use("/specifications", categoriesRoutes)

export { routes }
