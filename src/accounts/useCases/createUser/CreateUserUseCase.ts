import { IUsersRepository } from "src/accounts/repositories/IUsersRepository"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { inject, injectable } from "tsyringe"

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ driver_license, email, name, password, username }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({ driver_license, email, name, password, username })
  }
}
