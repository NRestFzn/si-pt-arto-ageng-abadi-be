import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { NavigationQueryFilterDto } from '../dto'

export class NavigationQueryRepository extends BaseQueryRequest {
  public name?: string
  public path?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as NavigationQueryFilterDto

    const nameValue = query.name as unknown
    this.name = typeof nameValue === 'string' ? nameValue : undefined

    const pathValue = query.path as unknown
    this.path = typeof pathValue === 'string' ? pathValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<NavigationQueryFilterDto>[] = []

    if (this.name !== undefined && this.name !== null && this.name !== '') {
      whereCondition.push({ name: { [Op.like]: `%${this.name}%` } })
    }

    if (this.path !== undefined && this.path !== null && this.path !== '') {
      whereCondition.push({ path: { [Op.like]: `%${this.path}%` } })
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
