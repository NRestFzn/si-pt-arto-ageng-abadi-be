import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { SupplierQueryFilterDto } from '../dto'

export class SupplierQueryRepository extends BaseQueryRequest {
  public company_name?: string
  public address?: string
  public phone_number?: string
  public pic_name?: string
  public pic_phone_number?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as SupplierQueryFilterDto

    const company_nameValue = query.company_name as unknown
    this.company_name = typeof company_nameValue === 'string' ? company_nameValue : undefined

    const addressValue = query.address as unknown
    this.address = typeof addressValue === 'string' ? addressValue : undefined

    const phone_numberValue = query.phone_number as unknown
    this.phone_number = typeof phone_numberValue === 'string' ? phone_numberValue : undefined

    const pic_nameValue = query.pic_name as unknown
    this.pic_name = typeof pic_nameValue === 'string' ? pic_nameValue : undefined

    const pic_phone_numberValue = query.pic_phone_number as unknown
    this.pic_phone_number = typeof pic_phone_numberValue === 'string' ? pic_phone_numberValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<SupplierQueryFilterDto>[] = []

    if (this.company_name !== undefined && this.company_name !== null && this.company_name !== '') {
      whereCondition.push({ company_name: { [Op.like]: `%${this.company_name}%` } })
    }

    if (this.address !== undefined && this.address !== null && this.address !== '') {
      whereCondition.push({ address: { [Op.like]: `%${this.address}%` } })
    }

    if (this.phone_number !== undefined && this.phone_number !== null && this.phone_number !== '') {
      whereCondition.push({ phone_number: { [Op.like]: `%${this.phone_number}%` } })
    }

    if (this.pic_name !== undefined && this.pic_name !== null && this.pic_name !== '') {
      whereCondition.push({ pic_name: { [Op.like]: `%${this.pic_name}%` } })
    }

    if (this.pic_phone_number !== undefined && this.pic_phone_number !== null && this.pic_phone_number !== '') {
      whereCondition.push({ pic_phone_number: { [Op.like]: `%${this.pic_phone_number}%` } })
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
