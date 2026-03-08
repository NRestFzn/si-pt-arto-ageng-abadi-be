import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { UserHasNavigationQueryFilterDto } from '../dto'

export class UserHasNavigationQueryRepository extends BaseQueryRequest {
  public user_id?: string
  public navigation_id?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as UserHasNavigationQueryFilterDto

    const user_idValue = query.user_id as unknown
    this.user_id = typeof user_idValue === 'string' ? user_idValue : undefined

    const navigation_idValue = query.navigation_id as unknown
    this.navigation_id = typeof navigation_idValue === 'string' ? navigation_idValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<UserHasNavigationQueryFilterDto>[] = []

    if (this.user_id !== undefined && this.user_id !== null && this.user_id !== '') {
      whereCondition.push({ user_id: this.user_id })
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
