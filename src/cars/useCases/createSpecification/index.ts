import { SpecificationsRepository } from "src/cars/repositories/implementations/SpecificationsRepository"
import { CreateSpecificationController } from "./CreateSpecificationController"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

const specificationsRepository = new SpecificationsRepository()
const specificationsUseCase = new CreateSpecificationUseCase(specificationsRepository)
export const specificationsController = new CreateSpecificationController(specificationsUseCase)
