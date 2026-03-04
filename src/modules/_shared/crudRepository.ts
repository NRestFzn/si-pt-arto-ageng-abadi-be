import { Request } from 'express'
import { Model, ModelStatic } from 'sequelize'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { MetaPaginationDto } from '@/routes/version1/response/metaData'

export class CrudRepository<
  TModel extends Model,
  TCreate extends object,
  TUpdate extends object,
> {
  constructor(private readonly model: ModelStatic<TModel>) {}

  async getAll(
    req: Request
  ): Promise<{ data: TModel[]; meta: { pagination: MetaPaginationDto } }> {
    const query = new BaseQueryRequest(req)

    const data = await this.model.findAll({
      limit: query.limit,
      offset: query.offset,
      order: query.order,
    })
    const dataCount = await this.model.count()

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

  async getByPk(id: string): Promise<TModel> {
    const data = await this.model.findByPk(id)

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async add(formData: TCreate): Promise<TModel> {
    let data!: TModel

    await db.sequelize!.transaction(async (transaction) => {
      data = await this.model.create(formData as any, { transaction })
    })

    return data
  }

  async update(id: string, formData: TUpdate): Promise<void> {
    const data = await this.getByPk(id)

    await db.sequelize!.transaction(async (transaction) => {
      await data.update(formData as any, { transaction })
    })
  }

  async delete(id: string): Promise<void> {
    const data = await this.getByPk(id)

    await data.destroy()
  }
}
