import { Router } from "express"
import { rolesRouter } from "@shared/infra/http/routes/roles.routes"
import { categoriesRoutes } from "@shared/infra/http/routes/categories.routes"
import { usersRoutes } from "./users.routes"
import { authenticateRoutes } from "./authenticate.routes"
const routes = Router()

routes.get("/", (request, response) => {
  return response.json({ message: "Olá dev!" })
})

routes.use("/roles", rolesRouter)
routes.use("/categories", categoriesRoutes)
routes.use("/specifications", categoriesRoutes)
routes.use("/users", usersRoutes)
routes.use(authenticateRoutes)
export { routes }
