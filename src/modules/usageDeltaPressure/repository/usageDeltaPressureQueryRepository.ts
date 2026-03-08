import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { UsageDeltaPressureQueryFilterDto } from '../dto'

export class UsageDeltaPressureQueryRepository extends BaseQueryRequest {
  public date?: Date
  public customer_id?: string
  public license_plate?: string
  public gtm_type?: string
  public lwc?: number
  public vol_nm3_at_200_bar_g?: number
  public pressure_start?: number
  public pressure_finish?: number
  public pressure_difference?: number
  public total_sm3?: number
  public ghv?: number
  public standard_1_sm3?: number
  public mmbtu?: number
  public mmbtu_per_sm3?: number
  public currency?: string
  public exchange_rate?: number
  public price_per_sm3?: number
  public total_sales?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as UsageDeltaPressureQueryFilterDto

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const license_plateValue = query.license_plate as unknown
    this.license_plate = typeof license_plateValue === 'string' ? license_plateValue : undefined

    const gtm_typeValue = query.gtm_type as unknown
    this.gtm_type = typeof gtm_typeValue === 'string' ? gtm_typeValue : undefined

    const lwcValue = query.lwc as unknown
    this.lwc = this.parseNumber(lwcValue)

    const vol_nm3_at_200_bar_gValue = query.vol_nm3_at_200_bar_g as unknown
    this.vol_nm3_at_200_bar_g = this.parseNumber(vol_nm3_at_200_bar_gValue)

    const pressure_startValue = query.pressure_start as unknown
    this.pressure_start = this.parseNumber(pressure_startValue)

    const pressure_finishValue = query.pressure_finish as unknown
    this.pressure_finish = this.parseNumber(pressure_finishValue)

    const pressure_differenceValue = query.pressure_difference as unknown
    this.pressure_difference = this.parseNumber(pressure_differenceValue)

    const total_sm3Value = query.total_sm3 as unknown
    this.total_sm3 = this.parseNumber(total_sm3Value)

    const ghvValue = query.ghv as unknown
    this.ghv = this.parseNumber(ghvValue)

    const standard_1_sm3Value = query.standard_1_sm3 as unknown
    this.standard_1_sm3 = this.parseNumber(standard_1_sm3Value)

    const mmbtuValue = query.mmbtu as unknown
    this.mmbtu = this.parseNumber(mmbtuValue)

    const mmbtu_per_sm3Value = query.mmbtu_per_sm3 as unknown
    this.mmbtu_per_sm3 = this.parseNumber(mmbtu_per_sm3Value)

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
    const whereCondition: WhereOptions<UsageDeltaPressureQueryFilterDto>[] = []

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.license_plate !== undefined && this.license_plate !== null && this.license_plate !== '') {
      whereCondition.push({ license_plate: { [Op.like]: `%${this.license_plate}%` } })
    }

    if (this.gtm_type !== undefined && this.gtm_type !== null && this.gtm_type !== '') {
      whereCondition.push({ gtm_type: { [Op.like]: `%${this.gtm_type}%` } })
    }

    if (this.lwc !== undefined && this.lwc !== null) {
      whereCondition.push({ lwc: this.lwc })
    }

    if (this.vol_nm3_at_200_bar_g !== undefined && this.vol_nm3_at_200_bar_g !== null) {
      whereCondition.push({ vol_nm3_at_200_bar_g: this.vol_nm3_at_200_bar_g })
    }

    if (this.pressure_start !== undefined && this.pressure_start !== null) {
      whereCondition.push({ pressure_start: this.pressure_start })
    }

    if (this.pressure_finish !== undefined && this.pressure_finish !== null) {
      whereCondition.push({ pressure_finish: this.pressure_finish })
    }

    if (this.pressure_difference !== undefined && this.pressure_difference !== null) {
      whereCondition.push({ pressure_difference: this.pressure_difference })
    }

    if (this.total_sm3 !== undefined && this.total_sm3 !== null) {
      whereCondition.push({ total_sm3: this.total_sm3 })
    }

    if (this.ghv !== undefined && this.ghv !== null) {
      whereCondition.push({ ghv: this.ghv })
    }

    if (this.standard_1_sm3 !== undefined && this.standard_1_sm3 !== null) {
      whereCondition.push({ standard_1_sm3: this.standard_1_sm3 })
    }

    if (this.mmbtu !== undefined && this.mmbtu !== null) {
      whereCondition.push({ mmbtu: this.mmbtu })
    }

    if (this.mmbtu_per_sm3 !== undefined && this.mmbtu_per_sm3 !== null) {
      whereCondition.push({ mmbtu_per_sm3: this.mmbtu_per_sm3 })
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
