import { Request, Response } from "express"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"
import { container } from "tsyringe"
export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)

    const listAll = await listCategoriesUseCase.execute()

    return response.json(listAll)
  }
}
