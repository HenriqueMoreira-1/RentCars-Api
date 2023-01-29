import { IUsersRepository } from "../IUsersRepository"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { Repository } from "typeorm"
import { User } from "src/accounts/entities/User"
import { dataSource } from "@shared/typeOrm"

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async create({ driver_license, email, name, password, username }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
      username,
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id })
    return user
  }
}
