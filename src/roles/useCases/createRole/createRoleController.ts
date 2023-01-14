import { RolesRepository } from "@roles/repositories/rolesrepository"
import { AppError } from "@shared/errors/AppError"
import { Response, Request } from "express"
import { CreateRoleUseCase } from "./createRoleUseCase"

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body

    const role = this.createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
