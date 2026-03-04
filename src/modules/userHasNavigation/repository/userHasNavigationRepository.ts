import { Request } from 'express'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import UserHasNavigation from '@/database/model/userHasNavigation'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'
import { CreateUserHasNavigationDto, UpdateUserHasNavigationDto } from '../dto'

export class UserHasNavigationRepository {
  private parseCompositeId(id: string) {
    const [user_id, navigation_id] = id.split(':')

    if (!user_id || !navigation_id) {
      throw new ErrorResponse.BadRequest('errors.badRequest')
    }

    return { user_id, navigation_id }
  }

  async getAll(
    req: Request
  ): Promise<{
    data: UserHasNavigation[]
    meta: { pagination: MetaPaginationDto }
  }> {
    const query = new BaseQueryRequest(req)

    const data = await UserHasNavigation.findAll({
      limit: query.limit,
      offset: query.offset,
      order: query.order,
    })
    const dataCount = await UserHasNavigation.count()

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

  async getByPk(id: string): Promise<UserHasNavigation> {
    const key = this.parseCompositeId(id)
    const data = await UserHasNavigation.findOne({ where: key })

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async add(formData: CreateUserHasNavigationDto): Promise<UserHasNavigation> {
    let data!: UserHasNavigation

    await db.sequelize!.transaction(async (transaction) => {
      data = await UserHasNavigation.create({ ...formData }, { transaction })
    })

    return data
  }

  async update(
    id: string,
    formData: UpdateUserHasNavigationDto
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
