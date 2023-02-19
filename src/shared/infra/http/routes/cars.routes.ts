import { Router } from "express"
import { CreateCarController } from "../../../../cars/useCases/createCar/CreateCarController"
import { createCarRouteValidation } from "@shared/infra/validation/cars"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { ListAvailableCarsController } from "src/cars/useCases/listAvailableCars/ListAvailableCarsController"
import { CreateCarSpecificationController } from "src/cars/useCases/createCarSpecification/CreateCarSpecificationController"
import { UploadCarImageController } from "src/cars/useCases/uploadCarImage/UploadCarImageController"
import uploadConfig from "../../../../config/upload"
import multer from "multer"

export const carsRoutes = Router()

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationController = new CreateCarSpecificationController()
const uploadCarImageController = new UploadCarImageController()

const upload = multer(uploadConfig.upload("./tmp/cars"))

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarRouteValidation, createCarController.handle)
carsRoutes.get("/available", listAvailableCarsController.handle)
carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
)
carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImageController.handle,
)
