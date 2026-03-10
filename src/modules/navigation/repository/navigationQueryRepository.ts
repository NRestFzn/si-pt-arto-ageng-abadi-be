import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { NavigationQueryFilterDto } from '../dto'

export class NavigationQueryRepository extends BaseQueryRequest {
  public title?: string
  public url?: string
  public group?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as NavigationQueryFilterDto

    const titleValue = query.title as unknown
    this.title = typeof titleValue === 'string' ? titleValue : undefined

    const urlValue = query.url as unknown
    this.url = typeof urlValue === 'string' ? urlValue : undefined

    const groupValue = query.group as unknown
    this.group = typeof groupValue === 'string' ? groupValue : undefined
  }

  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<NavigationQueryFilterDto>[] = []

    if (this.title !== undefined && this.title !== null && this.title !== '') {
      whereCondition.push({ title: { [Op.like]: `%${this.title}%` } })
    }

    if (this.url !== undefined && this.url !== null && this.url !== '') {
      whereCondition.push({ url: { [Op.like]: `%${this.url}%` } })
    }

    if (this.group !== undefined && this.group !== null && this.group !== '') {
      whereCondition.push({ group: this.group })
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
