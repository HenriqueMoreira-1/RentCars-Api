import { Router } from "express"
import multer from "multer"
import { CreateCategoryController } from "src/cars/useCases/createCategory/CreateCategoryController"
import { listCategoriesController } from "../../useCases/listCategories"
import { importCategoryController } from "../../useCases/importCategory"

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp",
})
const createCategoryController = new CreateCategoryController()

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
