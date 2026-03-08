import { Request } from 'express'
import { CoACategoryQueryFilterDto } from '../dto'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'

export class CoACategoryQueryRepository extends BaseQueryRequest {
  public name?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as CoACategoryQueryFilterDto

    this.name = query.name
  }

  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<CoACategoryQueryFilterDto>[] = []

    if (this.name) {
      whereCondition.push({
        name: {
          [Op.like]: `%${this.name}%`,
        },
      })
    }

    return {
      where: {
        [Op.and]: whereCondition,
      },
      limit: this.limit,
      offset: this.offset,
      order: this.order,
    }
  }
}
