import dayjs from "dayjs"
import { AppError } from "../../shared/errors/AppError"
import { RentalsRepositoryInMemory } from "../repositories/InMemory/RentalsRepositoryInMemory"
import { CreateRentalUseCase } from "./CreateRentalUseCase"
import { DayJsDateProvider } from "../../shared/container/providers/DateProvider/Implementations/DayJsDateProvider"

let rentalsRepositoryInMemory: RentalsRepositoryInMemory
let createRentalUseCase: CreateRentalUseCase
let dayJsDateProvider: DayJsDateProvider

describe("Create Rental", () => {
  const dayAddTwentyFourHours = dayjs().add(1, "day").toDate()
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
    dayJsDateProvider = new DayJsDateProvider()
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory, dayJsDateProvider)
  })

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      car_id: "12345",
      expected_return_date: dayAddTwentyFourHours,
      user_id: "12345",
    })

    expect(rental).toHaveProperty("id")
    expect(rental).toHaveProperty("start_date")
  })

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "12345",
        expected_return_date: dayAddTwentyFourHours,
        user_id: "12345",
      })
      await createRentalUseCase.execute({
        car_id: "12345",
        expected_return_date: dayAddTwentyFourHours,
        user_id: "12345",
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should not be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "test",
        expected_return_date: dayAddTwentyFourHours,
        user_id: "123",
      })
      await createRentalUseCase.execute({
        car_id: "test",
        expected_return_date: dayAddTwentyFourHours,
        user_id: "321",
      })
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should not be able to create a new rental with invalida return time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        car_id: "test",
        expected_return_date: dayjs().toDate(),
        user_id: "123",
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
