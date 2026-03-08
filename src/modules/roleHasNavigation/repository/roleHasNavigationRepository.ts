import { Request } from 'express'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import RoleHasNavigation from '@/database/model/roleHasNavigation'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import { CreateRoleHasNavigationDto, UpdateRoleHasNavigationDto } from '../dto'
import { RoleHasNavigationQueryRepository } from './roleHasNavigationQueryRepository'

export class RoleHasNavigationRepository {
  private parseCompositeId(id: string) {
    const [role_id, navigation_id] = id.split(':')

    if (!role_id || !navigation_id) {
      throw new ErrorResponse.BadRequest('errors.badRequest')
    }

    return { role_id, navigation_id }
  }

  async getAll(req: Request): Promise<{
    data: RoleHasNavigation[]
    meta: { pagination: MetaPaginationDto }
  }> {
    const query = new RoleHasNavigationQueryRepository(req)
    const queryFilter = query.queryFilter()

    const data = await RoleHasNavigation.findAll(queryFilter)
    const dataCount = await RoleHasNavigation.count({
      where: queryFilter.where,
    })

    return {
      data,
      meta: {
        pagination: {
          page: query.page,
          pageSize: query.pageSize,
          pageCount: data.length,
          total: dataCount,
        },
      },
    }
  }

  async getByPk(id: string): Promise<RoleHasNavigation> {
    const key = this.parseCompositeId(id)
    const data = await RoleHasNavigation.findOne({ where: key })

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async add(formData: CreateRoleHasNavigationDto): Promise<RoleHasNavigation> {
    let data!: RoleHasNavigation

    await db.sequelize!.transaction(async (transaction) => {
      data = await RoleHasNavigation.create({ ...formData }, { transaction })
    })

    return data
  }

  async update(
    id: string,
    formData: UpdateRoleHasNavigationDto
  ): Promise<void> {
    const data = await this.getByPk(id)

    await db.sequelize!.transaction(async (transaction) => {
      await data.update({ ...formData }, { transaction })
    })
  }

  async delete(id: string): Promise<void> {
    const data = await this.getByPk(id)
    await data.destroy()
  }
}
