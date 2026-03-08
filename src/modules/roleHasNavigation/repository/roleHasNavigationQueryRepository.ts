import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { RoleHasNavigationQueryFilterDto } from '../dto'

export class RoleHasNavigationQueryRepository extends BaseQueryRequest {
  public role_id?: string
  public navigation_id?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as RoleHasNavigationQueryFilterDto

    const role_idValue = query.role_id as unknown
    this.role_id = typeof role_idValue === 'string' ? role_idValue : undefined

    const navigation_idValue = query.navigation_id as unknown
    this.navigation_id = typeof navigation_idValue === 'string' ? navigation_idValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<RoleHasNavigationQueryFilterDto>[] = []

    if (this.role_id !== undefined && this.role_id !== null && this.role_id !== '') {
      whereCondition.push({ role_id: this.role_id })
    }

    if (this.navigation_id !== undefined && this.navigation_id !== null && this.navigation_id !== '') {
      whereCondition.push({ navigation_id: this.navigation_id })
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
