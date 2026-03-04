import { Request } from 'express'
import RoleHasNavigation from '@/database/model/roleHasNavigation'
import { CreateRoleHasNavigationDto, UpdateRoleHasNavigationDto } from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import { RoleHasNavigationRepository } from '../repository/roleHasNavigationRepository'

export class RoleHasNavigationService {
  constructor(
    private readonly repository = new RoleHasNavigationRepository()
  ) {}

  async getAll(
    req: Request
  ): Promise<{
    data: RoleHasNavigation[]
    meta: { pagination: MetaPaginationDto }
  }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<RoleHasNavigation> {
    return this.repository.getByPk(id)
  }

  async add(formData: CreateRoleHasNavigationDto): Promise<RoleHasNavigation> {
    return this.repository.add(formData)
  }

  async update(
    id: string,
    formData: UpdateRoleHasNavigationDto
  ): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
