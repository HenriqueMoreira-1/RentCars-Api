import { Request, Response } from "express"
import { ListRolesUseCase } from "./listRoleUseCase"

export class ListRolesController {
  constructor(private listRoleUseCase: ListRolesUseCase) {}

  handle(request: Request, response: Response): Response {
    const roles = this.listRoleUseCase.execute()

    return response.json(roles)
  }
}
