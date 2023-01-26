import { Router } from "express"
import multer from "multer"
import { CreateCategoryController } from "src/cars/useCases/createCategory/CreateCategoryController"
import { listCategoriesController } from "../../useCases/listCategories"
import { ImportCategoryController } from "src/cars/useCases/importCategory/ImportCategoryControlle"

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp",
})
const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes }
