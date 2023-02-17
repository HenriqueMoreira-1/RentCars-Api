import { SpecificationsRepositoryInMemory } from "../../repositories/inMemory/SpecificationsRepositoryInMemory"
import { AppError } from "../../../shared/errors/AppError"
import { CarsRepositoryInMemory } from "../../repositories/inMemory/CarsRepositoryInMemory"
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let carsRepositoryInMemory: CarsRepositoryInMemory
let createCarSpecificationUseCase: CreateCarSpecificationUseCase
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory()
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory,
    )
  })

  it("should not be able to add a new specification to a non-existent car", async () => {
    expect(async () => {
      const car_id = "1234"
      const specification_id = ["54321"]
      await createCarSpecificationUseCase.execute({
        car_id,
        specification_id,
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

    const specification = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test",
    })

    const specification_id = [specification.id]

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id,
    })

    expect(specificationsCars).toHaveProperty("specifications")
    expect(specificationsCars.specifications.length).toBe(1)
  })
})
