import { Router } from "express"
import multer from "multer"
import { CreateUserController } from "src/accounts/useCases/createUser/CreateUserController"
import { UpdateUserAvatarController } from "src/accounts/useCases/updateUserAvatar/updateUserAvatarController"

export const usersRoutes = Router()

const upload = multer({
  dest: "./avatar",
})

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.patch("/avatar", upload.single("file"), updateUserAvatarController.handle)
