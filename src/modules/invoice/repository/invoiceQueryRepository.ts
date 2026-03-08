import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { InvoiceQueryFilterDto } from '../dto'

export class InvoiceQueryRepository extends BaseQueryRequest {
  public customer_id?: string
  public invoice_number?: string
  public date?: Date
  public po_number?: string
  public po_date?: Date
  public period_start?: Date
  public period_end?: Date
  public total_usage?: number
  public deposit_deduction?: number
  public total_bill?: number
  public note?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as InvoiceQueryFilterDto

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const invoice_numberValue = query.invoice_number as unknown
    this.invoice_number = typeof invoice_numberValue === 'string' ? invoice_numberValue : undefined

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const po_numberValue = query.po_number as unknown
    this.po_number = typeof po_numberValue === 'string' ? po_numberValue : undefined

    const po_dateValue = query.po_date as unknown
    this.po_date = this.parseDate(po_dateValue)

    const period_startValue = query.period_start as unknown
    this.period_start = this.parseDate(period_startValue)

    const period_endValue = query.period_end as unknown
    this.period_end = this.parseDate(period_endValue)

    const total_usageValue = query.total_usage as unknown
    this.total_usage = this.parseNumber(total_usageValue)

    const deposit_deductionValue = query.deposit_deduction as unknown
    this.deposit_deduction = this.parseNumber(deposit_deductionValue)

    const total_billValue = query.total_bill as unknown
    this.total_bill = this.parseNumber(total_billValue)

    const noteValue = query.note as unknown
    this.note = typeof noteValue === 'string' ? noteValue : undefined
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
    const whereCondition: WhereOptions<InvoiceQueryFilterDto>[] = []

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.invoice_number !== undefined && this.invoice_number !== null && this.invoice_number !== '') {
      whereCondition.push({ invoice_number: { [Op.like]: `%${this.invoice_number}%` } })
    }

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.po_number !== undefined && this.po_number !== null && this.po_number !== '') {
      whereCondition.push({ po_number: { [Op.like]: `%${this.po_number}%` } })
    }

    if (this.po_date !== undefined && this.po_date !== null) {
      whereCondition.push({ po_date: this.po_date })
    }

    if (this.period_start !== undefined && this.period_start !== null) {
      whereCondition.push({ period_start: this.period_start })
    }

    if (this.period_end !== undefined && this.period_end !== null) {
      whereCondition.push({ period_end: this.period_end })
    }

    if (this.total_usage !== undefined && this.total_usage !== null) {
      whereCondition.push({ total_usage: this.total_usage })
    }

    if (this.deposit_deduction !== undefined && this.deposit_deduction !== null) {
      whereCondition.push({ deposit_deduction: this.deposit_deduction })
    }

    if (this.total_bill !== undefined && this.total_bill !== null) {
      whereCondition.push({ total_bill: this.total_bill })
    }

    if (this.note !== undefined && this.note !== null && this.note !== '') {
      whereCondition.push({ note: { [Op.like]: `%${this.note}%` } })
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
