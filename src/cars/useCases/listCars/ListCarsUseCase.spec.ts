import { CarsRepositoryInMemory } from "../../repositories/inMemory/CarsRepositoryInMemory"
import { ListCarsUseCase } from "./ListCarsUseCase"

let carsRepositoryInMemory = new CarsRepositoryInMemory()
let listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
  })

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id",
    })

    const cars = await listCarsUseCase.execute({})
    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand_test_two",
      category_id: "category_id",
    })

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand",
    })
    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand_test_three",
      category_id: "category_id",
    })

    const cars = await listCarsUseCase.execute({
      name: "Car 3",
    })
    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 4",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand_test_four",
      category_id: "12345",
    })

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    })
    expect(cars).toEqual([car])
  })
})
