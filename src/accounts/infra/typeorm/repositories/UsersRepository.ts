import { IUsersRepository } from "../../../repositories/IUsersRepository"
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO"
import { Repository } from "typeorm"
import { User } from "src/accounts/infra/typeorm/entities/User"
import { dataSource } from "../../../../shared/infra/typeorm"

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }

  async create({ driver_license, email, name, password, username, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      driver_license,
      email,
      name,
      password,
      username,
      avatar,
      id,
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

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOneBy({ username })
    return user
  }
}
