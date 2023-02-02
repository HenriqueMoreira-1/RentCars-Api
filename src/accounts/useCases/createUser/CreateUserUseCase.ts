import { IUsersRepository } from "src/accounts/repositories/IUsersRepository"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { inject, injectable } from "tsyringe"
import { hash } from "bcrypt"
import { AppError } from "../../../shared/errors/AppError"
@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ driver_license, email, name, password, username }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError("User with this email already exists")
    }

    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({ driver_license, email, name, password: passwordHash, username })
  }
}
