import { Router } from "express"
import { rolesRouter } from "@shared/http/routes/roles.routes"
import { categoriesRoutes } from "@shared/http/routes/categories.routes"
import { usersRoutes } from "./users.routes"
const routes = Router()

routes.get("/", (request, response) => {
  return response.json({ message: "Olá dev!" })
})

routes.use("/roles", rolesRouter)
routes.use("/categories", categoriesRoutes)
routes.use("/specifications", categoriesRoutes)
routes.use("/users", usersRoutes)
export { routes }
