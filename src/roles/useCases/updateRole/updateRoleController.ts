import { Response, Request } from "express"
import { UpdateRoleUseCase } from "./updateRoleUseCase"

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name } = request.body
    const role = await this.updateRoleUseCase.execute({ id, name })

    return response.status(200).json(role)
  }
}
