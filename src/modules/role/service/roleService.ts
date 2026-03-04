import { Request } from 'express'
import { CreateRoleDto, RoleDto, UpdateRoleDto } from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import Role from '@/database/model/role'
import { RoleRepository } from '../repository/roleRepository'

export class RoleService {
  constructor(private readonly repository = new RoleRepository()) {}

  async getAll(
    req: Request
  ): Promise<{ data: RoleDto[]; meta: { pagination: MetaPaginationDto } }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<Role> {
    return this.repository.getByPk(id)
  }

  async add(formData: CreateRoleDto): Promise<RoleDto> {
    return this.repository.add(formData)
  }

  async update(id: string, formData: UpdateRoleDto): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
