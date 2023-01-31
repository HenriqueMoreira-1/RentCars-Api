import { container } from "tsyringe"
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase"
import { Request, Response } from "express"
export class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const avatar_file = request.file.filename

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file })

    return response.status(204).send()
  }
}
