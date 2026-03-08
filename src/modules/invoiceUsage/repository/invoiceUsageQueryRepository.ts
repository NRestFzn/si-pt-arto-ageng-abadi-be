import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { InvoiceUsageQueryFilterDto } from '../dto'

export class InvoiceUsageQueryRepository extends BaseQueryRequest {
  public invoice_id?: string
  public usage_type?: string
  public usage_id?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as InvoiceUsageQueryFilterDto

    const invoice_idValue = query.invoice_id as unknown
    this.invoice_id = typeof invoice_idValue === 'string' ? invoice_idValue : undefined

    const usage_typeValue = query.usage_type as unknown
    this.usage_type = typeof usage_typeValue === 'string' ? usage_typeValue : undefined

    const usage_idValue = query.usage_id as unknown
    this.usage_id = typeof usage_idValue === 'string' ? usage_idValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<InvoiceUsageQueryFilterDto>[] = []

    if (this.invoice_id !== undefined && this.invoice_id !== null && this.invoice_id !== '') {
      whereCondition.push({ invoice_id: this.invoice_id })
    }

    if (this.usage_type !== undefined && this.usage_type !== null && this.usage_type !== '') {
      whereCondition.push({ usage_type: { [Op.like]: `%${this.usage_type}%` } })
    }

    if (this.usage_id !== undefined && this.usage_id !== null && this.usage_id !== '') {
      whereCondition.push({ usage_id: this.usage_id })
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
