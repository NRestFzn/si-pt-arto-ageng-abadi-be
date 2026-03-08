import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { PurchaseQueryFilterDto } from '../dto'

export class PurchaseQueryRepository extends BaseQueryRequest {
  public date?: Date
  public supplier_id?: string
  public driver_id?: string
  public license_plate?: string
  public gtm_type?: string
  public do_number?: string
  public ghc?: number
  public pressure_start?: number
  public pressure_finish?: number
  public meter_start?: number
  public meter_finish?: number
  public metering_fill_post?: number
  public volume_mmscf?: number
  public volume_mmbtu?: number
  public currency?: string
  public exchange_rate?: number
  public price_per_sm3?: number
  public total_sales?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as PurchaseQueryFilterDto

    const dateValue = query.date as unknown
    this.date = this.parseDate(dateValue)

    const supplier_idValue = query.supplier_id as unknown
    this.supplier_id = typeof supplier_idValue === 'string' ? supplier_idValue : undefined

    const driver_idValue = query.driver_id as unknown
    this.driver_id = typeof driver_idValue === 'string' ? driver_idValue : undefined

    const license_plateValue = query.license_plate as unknown
    this.license_plate = typeof license_plateValue === 'string' ? license_plateValue : undefined

    const gtm_typeValue = query.gtm_type as unknown
    this.gtm_type = typeof gtm_typeValue === 'string' ? gtm_typeValue : undefined

    const do_numberValue = query.do_number as unknown
    this.do_number = typeof do_numberValue === 'string' ? do_numberValue : undefined

    const ghcValue = query.ghc as unknown
    this.ghc = this.parseNumber(ghcValue)

    const pressure_startValue = query.pressure_start as unknown
    this.pressure_start = this.parseNumber(pressure_startValue)

    const pressure_finishValue = query.pressure_finish as unknown
    this.pressure_finish = this.parseNumber(pressure_finishValue)

    const meter_startValue = query.meter_start as unknown
    this.meter_start = this.parseNumber(meter_startValue)

    const meter_finishValue = query.meter_finish as unknown
    this.meter_finish = this.parseNumber(meter_finishValue)

    const metering_fill_postValue = query.metering_fill_post as unknown
    this.metering_fill_post = this.parseNumber(metering_fill_postValue)

    const volume_mmscfValue = query.volume_mmscf as unknown
    this.volume_mmscf = this.parseNumber(volume_mmscfValue)

    const volume_mmbtuValue = query.volume_mmbtu as unknown
    this.volume_mmbtu = this.parseNumber(volume_mmbtuValue)

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
    const whereCondition: WhereOptions<PurchaseQueryFilterDto>[] = []

    if (this.date !== undefined && this.date !== null) {
      whereCondition.push({ date: this.date })
    }

    if (this.supplier_id !== undefined && this.supplier_id !== null && this.supplier_id !== '') {
      whereCondition.push({ supplier_id: this.supplier_id })
    }

    if (this.driver_id !== undefined && this.driver_id !== null && this.driver_id !== '') {
      whereCondition.push({ driver_id: this.driver_id })
    }

    if (this.license_plate !== undefined && this.license_plate !== null && this.license_plate !== '') {
      whereCondition.push({ license_plate: { [Op.like]: `%${this.license_plate}%` } })
    }

    if (this.gtm_type !== undefined && this.gtm_type !== null && this.gtm_type !== '') {
      whereCondition.push({ gtm_type: { [Op.like]: `%${this.gtm_type}%` } })
    }

    if (this.do_number !== undefined && this.do_number !== null && this.do_number !== '') {
      whereCondition.push({ do_number: { [Op.like]: `%${this.do_number}%` } })
    }

    if (this.ghc !== undefined && this.ghc !== null) {
      whereCondition.push({ ghc: this.ghc })
    }

    if (this.pressure_start !== undefined && this.pressure_start !== null) {
      whereCondition.push({ pressure_start: this.pressure_start })
    }

    if (this.pressure_finish !== undefined && this.pressure_finish !== null) {
      whereCondition.push({ pressure_finish: this.pressure_finish })
    }

    if (this.meter_start !== undefined && this.meter_start !== null) {
      whereCondition.push({ meter_start: this.meter_start })
    }

    if (this.meter_finish !== undefined && this.meter_finish !== null) {
      whereCondition.push({ meter_finish: this.meter_finish })
    }

    if (this.metering_fill_post !== undefined && this.metering_fill_post !== null) {
      whereCondition.push({ metering_fill_post: this.metering_fill_post })
    }

    if (this.volume_mmscf !== undefined && this.volume_mmscf !== null) {
      whereCondition.push({ volume_mmscf: this.volume_mmscf })
    }

    if (this.volume_mmbtu !== undefined && this.volume_mmbtu !== null) {
      whereCondition.push({ volume_mmbtu: this.volume_mmbtu })
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
