import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { OfferQueryFilterDto } from '../dto'

export class OfferQueryRepository extends BaseQueryRequest {
  public customer_id?: string
  public offer_number?: string
  public date?: Date
  public implementation?: string
  public monthly_cng_usage_volume?: number
  public standard_ghv_specification?: string
  public cng_mother_station_location?: string
  public cng_gas_price_per_sm3?: number
  public payment_method?: string
  public price_includes?: string
  public contract_period?: string
  public preparation_time?: string
  public validity?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as OfferQueryFilterDto

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const offer_numberValue = query.offer_number as unknown
    this.offer_number = typeof offer_numberValue === 'string' ? offer_numberValue : undefined

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const implementationValue = query.implementation as unknown
    this.implementation = typeof implementationValue === 'string' ? implementationValue : undefined

    const monthly_cng_usage_volumeValue = query.monthly_cng_usage_volume as unknown
    this.monthly_cng_usage_volume = this.parseNumber(monthly_cng_usage_volumeValue)

    const standard_ghv_specificationValue = query.standard_ghv_specification as unknown
    this.standard_ghv_specification = typeof standard_ghv_specificationValue === 'string' ? standard_ghv_specificationValue : undefined

    const cng_mother_station_locationValue = query.cng_mother_station_location as unknown
    this.cng_mother_station_location = typeof cng_mother_station_locationValue === 'string' ? cng_mother_station_locationValue : undefined

    const cng_gas_price_per_sm3Value = query.cng_gas_price_per_sm3 as unknown
    this.cng_gas_price_per_sm3 = this.parseNumber(cng_gas_price_per_sm3Value)

    const payment_methodValue = query.payment_method as unknown
    this.payment_method = typeof payment_methodValue === 'string' ? payment_methodValue : undefined

    const price_includesValue = query.price_includes as unknown
    this.price_includes = typeof price_includesValue === 'string' ? price_includesValue : undefined

    const contract_periodValue = query.contract_period as unknown
    this.contract_period = typeof contract_periodValue === 'string' ? contract_periodValue : undefined

    const preparation_timeValue = query.preparation_time as unknown
    this.preparation_time = typeof preparation_timeValue === 'string' ? preparation_timeValue : undefined

    const validityValue = query.validity as unknown
    this.validity = typeof validityValue === 'string' ? validityValue : undefined
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
    const whereCondition: WhereOptions<OfferQueryFilterDto>[] = []

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.offer_number !== undefined && this.offer_number !== null && this.offer_number !== '') {
      whereCondition.push({ offer_number: { [Op.like]: `%${this.offer_number}%` } })
    }

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.implementation !== undefined && this.implementation !== null && this.implementation !== '') {
      whereCondition.push({ implementation: { [Op.like]: `%${this.implementation}%` } })
    }

    if (this.monthly_cng_usage_volume !== undefined && this.monthly_cng_usage_volume !== null) {
      whereCondition.push({ monthly_cng_usage_volume: this.monthly_cng_usage_volume })
    }

    if (this.standard_ghv_specification !== undefined && this.standard_ghv_specification !== null && this.standard_ghv_specification !== '') {
      whereCondition.push({ standard_ghv_specification: { [Op.like]: `%${this.standard_ghv_specification}%` } })
    }

    if (this.cng_mother_station_location !== undefined && this.cng_mother_station_location !== null && this.cng_mother_station_location !== '') {
      whereCondition.push({ cng_mother_station_location: { [Op.like]: `%${this.cng_mother_station_location}%` } })
    }

    if (this.cng_gas_price_per_sm3 !== undefined && this.cng_gas_price_per_sm3 !== null) {
      whereCondition.push({ cng_gas_price_per_sm3: this.cng_gas_price_per_sm3 })
    }

    if (this.payment_method !== undefined && this.payment_method !== null && this.payment_method !== '') {
      whereCondition.push({ payment_method: { [Op.like]: `%${this.payment_method}%` } })
    }

    if (this.price_includes !== undefined && this.price_includes !== null && this.price_includes !== '') {
      whereCondition.push({ price_includes: { [Op.like]: `%${this.price_includes}%` } })
    }

    if (this.contract_period !== undefined && this.contract_period !== null && this.contract_period !== '') {
      whereCondition.push({ contract_period: { [Op.like]: `%${this.contract_period}%` } })
    }

    if (this.preparation_time !== undefined && this.preparation_time !== null && this.preparation_time !== '') {
      whereCondition.push({ preparation_time: { [Op.like]: `%${this.preparation_time}%` } })
    }

    if (this.validity !== undefined && this.validity !== null && this.validity !== '') {
      whereCondition.push({ validity: { [Op.like]: `%${this.validity}%` } })
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
