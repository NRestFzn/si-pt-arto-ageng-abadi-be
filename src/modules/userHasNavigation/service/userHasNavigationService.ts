import { Request } from 'express'
import UserHasNavigation from '@/database/model/userHasNavigation'
import { CreateUserHasNavigationDto, UpdateUserHasNavigationDto } from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import { UserHasNavigationRepository } from '../repository/userHasNavigationRepository'

export class UserHasNavigationService {
  constructor(
    private readonly repository = new UserHasNavigationRepository()
  ) {}

  async getAll(
    req: Request
  ): Promise<{
    data: UserHasNavigation[]
    meta: { pagination: MetaPaginationDto }
  }> {
    return this.repository.getAll(req)
  }

  async getByPk(id: string): Promise<UserHasNavigation> {
    return this.repository.getByPk(id)
  }

  async add(formData: CreateUserHasNavigationDto): Promise<UserHasNavigation> {
    return this.repository.add(formData)
  }

  async update(
    id: string,
    formData: UpdateUserHasNavigationDto
  ): Promise<void> {
    return this.repository.update(id, formData)
  }

  async delete(id: string): Promise<void> {
    return this.repository.delete(id)
  }
}
