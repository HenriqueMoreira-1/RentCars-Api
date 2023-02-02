import { inject, injectable } from "tsyringe"
import { compare } from "bcrypt"
import { IUsersRepository } from "src/accounts/repositories/IUsersRepository"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../shared/errors/AppError"

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("Email or password incorrect!")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!")
    }

    const token = sign({}, "56b3b76dc9bdf51913ecad3dd97ec4b9", {
      subject: user.id,
      expiresIn: "1d",
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    }

    return tokenReturn
  }
}
