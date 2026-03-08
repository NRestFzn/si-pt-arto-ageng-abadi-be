import { Request } from 'express'
import CoACategory from '@/database/model/coaCategory'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import { CoACategoryQueryRepository } from './coaCategoryQueryRepository'
import {
  CreateCoACategoryDto,
  CoACategoryDto,
  UpdateCoACategoryDto,
} from '../dto'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'

export class CoACategoryRepository {
  async getAll(req: Request): Promise<{
    data: CoACategoryDto[]
    meta: { pagination: MetaPaginationDto }
  }> {
    const query = new CoACategoryQueryRepository(req)

    const data = await CoACategory.findAll(query.queryFilter())
    const dataCount = await CoACategory.count()

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

  async getByPk(id: string): Promise<CoACategory> {
    const data = await CoACategory.findByPk(id)

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async add(formData: CreateCoACategoryDto): Promise<CoACategoryDto> {
    let data: any

    await db.sequelize!.transaction(async (transaction) => {
      data = await CoACategory.create({ ...formData }, { transaction })
    })

    return data
  }

  async update(id: string, formData: UpdateCoACategoryDto): Promise<void> {
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
