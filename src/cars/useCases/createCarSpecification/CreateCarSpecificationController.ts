import { Request, Response } from "express"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"
import { container } from "tsyringe"

export class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { specification_id } = request.body

    const createCarSpecificationUseCase = container.resolve(CreateCarSpecificationUseCase)

    const carSpecifications = await createCarSpecificationUseCase.execute({ car_id: id, specification_id })

    return response.json(carSpecifications)
  }
}
