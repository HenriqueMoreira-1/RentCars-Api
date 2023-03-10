import { Car } from "../../infra/typeorm/entities/car"
import { AppError } from "../../../shared/errors/AppError"
import { ICarsRepository } from "../../repositories/ICarsRepository"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
  car_id: string
  specification_id: string[]
}

@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ car_id, specification_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id)

    if (!carExists) {
      throw new AppError("Car does not exists!")
    }

    const specifications = await this.specificationsRepository.findByIds(specification_id)

    carExists.specifications = specifications

    await this.carsRepository.create(carExists)
    console.log("carSpecification", carExists)
    return carExists
  }
}
