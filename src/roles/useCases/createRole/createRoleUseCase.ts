import { Role } from "@roles/entities/role"
import { RolesRepository } from "@roles/repositories/rolesrepository"
import { AppError } from "@shared/errors/AppError"

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadyExists = await this.rolesRepository.findByName(name)
    if (roleAlreadyExists) {
      throw new AppError("Role Already Exists")
    }

    return this.rolesRepository.create({ name })
  }
}
