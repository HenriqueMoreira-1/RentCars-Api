import { AppError } from "../../../shared/errors/AppError"
import { CarsRepositoryInMemory } from "../../repositories/inMemory/CarsRepositoryInMemory"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let carsRepositoryInMemory: CarsRepositoryInMemory
let createCarSpecificationUseCase: CreateCarSpecificationUseCase

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory)
  })

  it("should not be able to add a new specification to a non-existent car", async () => {
    expect(async () => {
      const car_id = "1234"
      const specifications_id = ["54321"]
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id",
    })
    const specifications_id = ["54321"]
    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    })
  })
})
