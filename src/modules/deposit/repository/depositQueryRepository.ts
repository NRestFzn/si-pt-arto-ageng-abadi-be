import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { DepositQueryFilterDto } from '../dto'

export class DepositQueryRepository extends BaseQueryRequest {
  public customer_id?: string
  public date?: Date
  public amount?: number
  public chart_of_account?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as DepositQueryFilterDto

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const amountValue = query.amount as unknown
    this.amount = this.parseNumber(amountValue)

    const chart_of_accountValue = query.chart_of_account as unknown
    this.chart_of_account = typeof chart_of_accountValue === 'string' ? chart_of_accountValue : undefined
  }

  private parseNumber(value: unknown): number | undefined {
    if (value === undefined || value === null || value === '') return undefined

    const parsed = Number(value)
    return Number.isNaN(parsed) ? undefined : parsed
  }

  private parseDate(value: unknown): Date | undefined {
    if (value === undefined || value === null || value === '') return undefined

    const parsed = new Date(String(value))
    return Number.isNaN(parsed.getTime()) ? undefined : parsed
  }

  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<DepositQueryFilterDto>[] = []

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.amount !== undefined && this.amount !== null) {
      whereCondition.push({ amount: this.amount })
    }

    if (this.chart_of_account !== undefined && this.chart_of_account !== null && this.chart_of_account !== '') {
      whereCondition.push({ chart_of_account: { [Op.like]: `%${this.chart_of_account}%` } })
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
