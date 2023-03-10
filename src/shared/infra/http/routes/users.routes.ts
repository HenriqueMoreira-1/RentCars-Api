import { Router } from "express"
import multer from "multer"
import { CreateUserController } from "src/accounts/useCases/createUser/CreateUserController"
import { UpdateUserAvatarController } from "src/accounts/useCases/updateUserAvatar/updateUserAvatarController"
import uploadConfig from "../../../../config/upload"
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated"

export const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle,
)
