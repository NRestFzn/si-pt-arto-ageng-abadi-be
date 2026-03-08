import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { ContractPjbgQueryFilterDto } from '../dto'

export class ContractPjbgQueryRepository extends BaseQueryRequest {
  public customer_id?: string
  public contract_number?: string
  public duration?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as ContractPjbgQueryFilterDto

    const customer_idValue = query.customer_id as unknown
    this.customer_id = typeof customer_idValue === 'string' ? customer_idValue : undefined

    const contract_numberValue = query.contract_number as unknown
    this.contract_number = typeof contract_numberValue === 'string' ? contract_numberValue : undefined

    const durationValue = query.duration as unknown
    this.duration = typeof durationValue === 'string' ? durationValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<ContractPjbgQueryFilterDto>[] = []

    if (this.customer_id !== undefined && this.customer_id !== null && this.customer_id !== '') {
      whereCondition.push({ customer_id: this.customer_id })
    }

    if (this.contract_number !== undefined && this.contract_number !== null && this.contract_number !== '') {
      whereCondition.push({ contract_number: { [Op.like]: `%${this.contract_number}%` } })
    }

    if (this.duration !== undefined && this.duration !== null && this.duration !== '') {
      whereCondition.push({ duration: { [Op.like]: `%${this.duration}%` } })
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
