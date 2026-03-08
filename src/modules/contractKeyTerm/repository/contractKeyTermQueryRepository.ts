import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { ContractKeyTermQueryFilterDto } from '../dto'

export class ContractKeyTermQueryRepository extends BaseQueryRequest {
  public customer_id?: string
  public offer_number?: string
  public offer_date?: Date
  public volume?: number
  public duration?: string
  public price_type?: string
  public moq?: number
  public billing_type?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as ContractKeyTermQueryFilterDto

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const offer_numberValue = query.offer_number as unknown
    this.offer_number = typeof offer_numberValue === 'string' ? offer_numberValue : undefined

    const offer_dateValue = query.offer_date as unknown
    this.offer_date = this.parseDate(offer_dateValue)

    const volumeValue = query.volume as unknown
    this.volume = this.parseNumber(volumeValue)

    const durationValue = query.duration as unknown
    this.duration = typeof durationValue === 'string' ? durationValue : undefined

    const price_typeValue = query.price_type as unknown
    this.price_type = typeof price_typeValue === 'string' ? price_typeValue : undefined

    const moqValue = query.moq as unknown
    this.moq = this.parseNumber(moqValue)

    const billing_typeValue = query.billing_type as unknown
    this.billing_type = typeof billing_typeValue === 'string' ? billing_typeValue : undefined
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
    const whereCondition: WhereOptions<ContractKeyTermQueryFilterDto>[] = []

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.offer_number !== undefined && this.offer_number !== null && this.offer_number !== '') {
      whereCondition.push({ offer_number: { [Op.like]: `%${this.offer_number}%` } })
    }

    if (this.offer_date !== undefined && this.offer_date !== null) {
      whereCondition.push({ offer_date: this.offer_date })
    }

    if (this.volume !== undefined && this.volume !== null) {
      whereCondition.push({ volume: this.volume })
    }

    if (this.duration !== undefined && this.duration !== null && this.duration !== '') {
      whereCondition.push({ duration: { [Op.like]: `%${this.duration}%` } })
    }

    if (this.price_type !== undefined && this.price_type !== null && this.price_type !== '') {
      whereCondition.push({ price_type: { [Op.like]: `%${this.price_type}%` } })
    }

    if (this.moq !== undefined && this.moq !== null) {
      whereCondition.push({ moq: this.moq })
    }

    if (this.billing_type !== undefined && this.billing_type !== null && this.billing_type !== '') {
      whereCondition.push({ billing_type: { [Op.like]: `%${this.billing_type}%` } })
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
