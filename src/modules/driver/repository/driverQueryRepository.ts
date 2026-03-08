import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { DriverQueryFilterDto } from '../dto'

export class DriverQueryRepository extends BaseQueryRequest {
  public name?: string
  public phone_number?: string
  public nik?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as DriverQueryFilterDto

    const nameValue = query.name as unknown
    this.name = typeof nameValue === 'string' ? nameValue : undefined

    const phone_numberValue = query.phone_number as unknown
    this.phone_number = typeof phone_numberValue === 'string' ? phone_numberValue : undefined

    const nikValue = query.nik as unknown
    this.nik = typeof nikValue === 'string' ? nikValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<DriverQueryFilterDto>[] = []

    if (this.name !== undefined && this.name !== null && this.name !== '') {
      whereCondition.push({ name: { [Op.like]: `%${this.name}%` } })
    }

    if (this.phone_number !== undefined && this.phone_number !== null && this.phone_number !== '') {
      whereCondition.push({ phone_number: { [Op.like]: `%${this.phone_number}%` } })
    }

    if (this.nik !== undefined && this.nik !== null && this.nik !== '') {
      whereCondition.push({ nik: { [Op.like]: `%${this.nik}%` } })
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
