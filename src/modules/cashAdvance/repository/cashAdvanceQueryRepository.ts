import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { CashAdvanceQueryFilterDto } from '../dto'

export class CashAdvanceQueryRepository extends BaseQueryRequest {
  public employee_id?: string
  public date?: Date
  public description?: string
  public amount?: number
  public monthly_deduction?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as CashAdvanceQueryFilterDto

    const employee_idValue = query.employee_id as unknown
    this.employee_id = typeof employee_idValue === 'string' ? employee_idValue : undefined

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const descriptionValue = query.description as unknown
    this.description = typeof descriptionValue === 'string' ? descriptionValue : undefined

    const amountValue = query.amount as unknown
    this.amount = this.parseNumber(amountValue)

    const monthly_deductionValue = query.monthly_deduction as unknown
    this.monthly_deduction = this.parseNumber(monthly_deductionValue)
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
    const whereCondition: WhereOptions<CashAdvanceQueryFilterDto>[] = []

    if (this.employee_id !== undefined && this.employee_id !== null && this.employee_id !== '') {
      whereCondition.push({ employee_id: this.employee_id })
    }

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.description !== undefined && this.description !== null && this.description !== '') {
      whereCondition.push({ description: { [Op.like]: `%${this.description}%` } })
    }

    if (this.amount !== undefined && this.amount !== null) {
      whereCondition.push({ amount: this.amount })
    }

    if (this.monthly_deduction !== undefined && this.monthly_deduction !== null) {
      whereCondition.push({ monthly_deduction: this.monthly_deduction })
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
