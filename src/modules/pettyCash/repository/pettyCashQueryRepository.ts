import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { PettyCashQueryFilterDto } from '../dto'

export class PettyCashQueryRepository extends BaseQueryRequest {
  public customer_id?: string
  public expense_type?: string
  public date?: Date
  public description?: string
  public quantity?: number
  public unit_price?: number
  public total?: number
  public transaction_type?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as PettyCashQueryFilterDto

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const expense_typeValue = query.expense_type as unknown
    this.expense_type = typeof expense_typeValue === 'string' ? expense_typeValue : undefined

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const descriptionValue = query.description as unknown
    this.description = typeof descriptionValue === 'string' ? descriptionValue : undefined

    const quantityValue = query.quantity as unknown
    this.quantity = this.parseNumber(quantityValue)

    const unit_priceValue = query.unit_price as unknown
    this.unit_price = this.parseNumber(unit_priceValue)

    const totalValue = query.total as unknown
    this.total = this.parseNumber(totalValue)

    const transaction_typeValue = query.transaction_type as unknown
    this.transaction_type = typeof transaction_typeValue === 'string' ? transaction_typeValue : undefined
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
    const whereCondition: WhereOptions<PettyCashQueryFilterDto>[] = []

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.expense_type !== undefined && this.expense_type !== null && this.expense_type !== '') {
      whereCondition.push({ expense_type: { [Op.like]: `%${this.expense_type}%` } })
    }

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.description !== undefined && this.description !== null && this.description !== '') {
      whereCondition.push({ description: { [Op.like]: `%${this.description}%` } })
    }

    if (this.quantity !== undefined && this.quantity !== null) {
      whereCondition.push({ quantity: this.quantity })
    }

    if (this.unit_price !== undefined && this.unit_price !== null) {
      whereCondition.push({ unit_price: this.unit_price })
    }

    if (this.total !== undefined && this.total !== null) {
      whereCondition.push({ total: this.total })
    }

    if (this.transaction_type !== undefined && this.transaction_type !== null && this.transaction_type !== '') {
      whereCondition.push({ transaction_type: { [Op.like]: `%${this.transaction_type}%` } })
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
