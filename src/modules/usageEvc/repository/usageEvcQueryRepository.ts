import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { UsageEvcQueryFilterDto } from '../dto'

export class UsageEvcQueryRepository extends BaseQueryRequest {
  public date?: Date
  public customer_id?: string
  public license_plate?: string
  public gtm_number?: string
  public turbine_start?: number
  public turbine_finish?: number
  public turbine_difference?: number
  public evc_start?: number
  public evc_finish?: number
  public evc_difference_sm3?: number
  public currency?: string
  public exchange_rate?: number
  public price_per_sm3?: number
  public total_sales?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as UsageEvcQueryFilterDto

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const license_plateValue = query.license_plate as unknown
    this.license_plate = typeof license_plateValue === 'string' ? license_plateValue : undefined

    const gtm_numberValue = query.gtm_number as unknown
    this.gtm_number = typeof gtm_numberValue === 'string' ? gtm_numberValue : undefined

    const turbine_startValue = query.turbine_start as unknown
    this.turbine_start = this.parseNumber(turbine_startValue)

    const turbine_finishValue = query.turbine_finish as unknown
    this.turbine_finish = this.parseNumber(turbine_finishValue)

    const turbine_differenceValue = query.turbine_difference as unknown
    this.turbine_difference = this.parseNumber(turbine_differenceValue)

    const evc_startValue = query.evc_start as unknown
    this.evc_start = this.parseNumber(evc_startValue)

    const evc_finishValue = query.evc_finish as unknown
    this.evc_finish = this.parseNumber(evc_finishValue)

    const evc_difference_sm3Value = query.evc_difference_sm3 as unknown
    this.evc_difference_sm3 = this.parseNumber(evc_difference_sm3Value)

    const currencyValue = query.currency as unknown
    this.currency = typeof currencyValue === 'string' ? currencyValue : undefined

    const exchange_rateValue = query.exchange_rate as unknown
    this.exchange_rate = this.parseNumber(exchange_rateValue)

    const price_per_sm3Value = query.price_per_sm3 as unknown
    this.price_per_sm3 = this.parseNumber(price_per_sm3Value)

    const total_salesValue = query.total_sales as unknown
    this.total_sales = this.parseNumber(total_salesValue)
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
    const whereCondition: WhereOptions<UsageEvcQueryFilterDto>[] = []

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.license_plate !== undefined && this.license_plate !== null && this.license_plate !== '') {
      whereCondition.push({ license_plate: { [Op.like]: `%${this.license_plate}%` } })
    }

    if (this.gtm_number !== undefined && this.gtm_number !== null && this.gtm_number !== '') {
      whereCondition.push({ gtm_number: { [Op.like]: `%${this.gtm_number}%` } })
    }

    if (this.turbine_start !== undefined && this.turbine_start !== null) {
      whereCondition.push({ turbine_start: this.turbine_start })
    }

    if (this.turbine_finish !== undefined && this.turbine_finish !== null) {
      whereCondition.push({ turbine_finish: this.turbine_finish })
    }

    if (this.turbine_difference !== undefined && this.turbine_difference !== null) {
      whereCondition.push({ turbine_difference: this.turbine_difference })
    }

    if (this.evc_start !== undefined && this.evc_start !== null) {
      whereCondition.push({ evc_start: this.evc_start })
    }

    if (this.evc_finish !== undefined && this.evc_finish !== null) {
      whereCondition.push({ evc_finish: this.evc_finish })
    }

    if (this.evc_difference_sm3 !== undefined && this.evc_difference_sm3 !== null) {
      whereCondition.push({ evc_difference_sm3: this.evc_difference_sm3 })
    }

    if (this.currency !== undefined && this.currency !== null && this.currency !== '') {
      whereCondition.push({ currency: { [Op.like]: `%${this.currency}%` } })
    }

    if (this.exchange_rate !== undefined && this.exchange_rate !== null) {
      whereCondition.push({ exchange_rate: this.exchange_rate })
    }

    if (this.price_per_sm3 !== undefined && this.price_per_sm3 !== null) {
      whereCondition.push({ price_per_sm3: this.price_per_sm3 })
    }

    if (this.total_sales !== undefined && this.total_sales !== null) {
      whereCondition.push({ total_sales: this.total_sales })
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
