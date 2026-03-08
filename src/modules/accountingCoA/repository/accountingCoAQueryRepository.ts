import { Request } from 'express'
import { AccountingCoAQueryFilterDto } from '../dto'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'

export class AccountingCoAQueryRepository extends BaseQueryRequest {
  public code?: string
  public name?: string
  public initialBalance?: number
  public CoACategoryId?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as AccountingCoAQueryFilterDto

    this.code = query.code
    this.name = query.name
    this.initialBalance = query.initialBalance
    this.CoACategoryId = query.CoACategoryId
  }

  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<AccountingCoAQueryFilterDto>[] = []

    if (this.code) {
      whereCondition.push({
        code: {
          [Op.like]: `%${this.code}%`,
        },
      })
    }

    if (this.name) {
      whereCondition.push({
        name: {
          [Op.like]: `%${this.name}%`,
        },
      })
    }

    if (this.initialBalance) {
      whereCondition.push({
        initialBalance: this.initialBalance,
      })
    }

    if (this.CoACategoryId) {
      whereCondition.push({
        CoACategoryId: this.CoACategoryId,
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
