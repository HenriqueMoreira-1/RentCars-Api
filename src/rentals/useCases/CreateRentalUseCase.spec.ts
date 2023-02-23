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
    await createRentalUseCase.execute({
      car_id: "12345",
      expected_return_date: new Date(),
      user_id: "12345",
    })
  })
})
