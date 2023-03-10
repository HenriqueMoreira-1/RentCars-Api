import { AppError } from "@shared/errors/AppError"
import { ISpecificationsRepository } from "src/cars/repositories/ISpecificationsRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  name: string
  description: string
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists")
    }

    await this.specificationsRepository.create({ name, description })
  }
}
