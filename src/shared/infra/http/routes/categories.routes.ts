import { createCategoryRouteValidation } from "@shared/infra/validation/categories"
import { Router } from "express"
import multer from "multer"
import { CreateCategoryController } from "src/cars/useCases/createCategory/CreateCategoryController"
import { ImportCategoryController } from "src/cars/useCases/importCategory/ImportCategoryControlle"
import { ListCategoriesController } from "src/cars/useCases/listCategories/ListCategoriesController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ensureAdmin } from "../middlewares/ensureAdmin"

const categoriesRoutes = Router()

const upload = multer({
  dest: "./tmp",
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryRouteValidation,
  createCategoryController.handle,
)
categoriesRoutes.get("/", listCategoriesController.handle)
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle,
)

export { categoriesRoutes }
