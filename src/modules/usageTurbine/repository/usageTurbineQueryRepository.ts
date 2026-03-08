import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { UsageTurbineQueryFilterDto } from '../dto'

export class UsageTurbineQueryRepository extends BaseQueryRequest {
  public date?: Date
  public customer_id?: string
  public gtm_number?: string
  public turbine_start?: number
  public turbine_finish?: number
  public turbine_difference?: number
  public supply_pressure?: number
  public temp_avg_prs?: number
  public compression_factor?: number
  public temp_base?: number
  public pressure_standard?: number
  public pressure_atm_standard?: number
  public total_sm3?: number
  public ghv?: number
  public standard_1_sm3?: number
  public mmbtu?: number
  public currency?: string
  public exchange_rate?: number
  public price_per_sm3?: number
  public total_sales?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as UsageTurbineQueryFilterDto

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const gtm_numberValue = query.gtm_number as unknown
    this.gtm_number = typeof gtm_numberValue === 'string' ? gtm_numberValue : undefined

    const turbine_startValue = query.turbine_start as unknown
    this.turbine_start = this.parseNumber(turbine_startValue)

    const turbine_finishValue = query.turbine_finish as unknown
    this.turbine_finish = this.parseNumber(turbine_finishValue)

    const turbine_differenceValue = query.turbine_difference as unknown
    this.turbine_difference = this.parseNumber(turbine_differenceValue)

    const supply_pressureValue = query.supply_pressure as unknown
    this.supply_pressure = this.parseNumber(supply_pressureValue)

    const temp_avg_prsValue = query.temp_avg_prs as unknown
    this.temp_avg_prs = this.parseNumber(temp_avg_prsValue)

    const compression_factorValue = query.compression_factor as unknown
    this.compression_factor = this.parseNumber(compression_factorValue)

    const temp_baseValue = query.temp_base as unknown
    this.temp_base = this.parseNumber(temp_baseValue)

    const pressure_standardValue = query.pressure_standard as unknown
    this.pressure_standard = this.parseNumber(pressure_standardValue)

    const pressure_atm_standardValue = query.pressure_atm_standard as unknown
    this.pressure_atm_standard = this.parseNumber(pressure_atm_standardValue)

    const total_sm3Value = query.total_sm3 as unknown
    this.total_sm3 = this.parseNumber(total_sm3Value)

    const ghvValue = query.ghv as unknown
    this.ghv = this.parseNumber(ghvValue)

    const standard_1_sm3Value = query.standard_1_sm3 as unknown
    this.standard_1_sm3 = this.parseNumber(standard_1_sm3Value)

    const mmbtuValue = query.mmbtu as unknown
    this.mmbtu = this.parseNumber(mmbtuValue)

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
    const whereCondition: WhereOptions<UsageTurbineQueryFilterDto>[] = []

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
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

    if (this.supply_pressure !== undefined && this.supply_pressure !== null) {
      whereCondition.push({ supply_pressure: this.supply_pressure })
    }

    if (this.temp_avg_prs !== undefined && this.temp_avg_prs !== null) {
      whereCondition.push({ temp_avg_prs: this.temp_avg_prs })
    }

    if (this.compression_factor !== undefined && this.compression_factor !== null) {
      whereCondition.push({ compression_factor: this.compression_factor })
    }

    if (this.temp_base !== undefined && this.temp_base !== null) {
      whereCondition.push({ temp_base: this.temp_base })
    }

    if (this.pressure_standard !== undefined && this.pressure_standard !== null) {
      whereCondition.push({ pressure_standard: this.pressure_standard })
    }

    if (this.pressure_atm_standard !== undefined && this.pressure_atm_standard !== null) {
      whereCondition.push({ pressure_atm_standard: this.pressure_atm_standard })
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
