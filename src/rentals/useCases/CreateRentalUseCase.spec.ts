import { AppError } from "../../shared/errors/AppError"
import { RentalsRepositoryInMemory } from "../repositories/InMemory/RentalsRepositoryInMemory"
import { CreateRentalUseCase } from "./CreateRentalUseCase"

let rentalsRepositoryInMemory: RentalsRepositoryInMemory
let createRentalUseCase: CreateRentalUseCase

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory)
  })

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      car_id: "12345",
      expected_return_date: new Date(),
      user_id: "12345",
    })

    expect(rental).toHaveProperty("id")
    expect(rental).toHaveProperty("start_date")
  })

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "12345",
        expected_return_date: new Date(),
        user_id: "12345",
      })
      await createRentalUseCase.execute({
        car_id: "12345",
        expected_return_date: new Date(),
        user_id: "12345",
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should not be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "test",
        expected_return_date: new Date(),
        user_id: "123",
      })
      await createRentalUseCase.execute({
        car_id: "test",
        expected_return_date: new Date(),
        user_id: "321",
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
