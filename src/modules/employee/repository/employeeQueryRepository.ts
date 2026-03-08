import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { EmployeeQueryFilterDto } from '../dto'

export class EmployeeQueryRepository extends BaseQueryRequest {
  public name?: string
  public nik?: string

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as EmployeeQueryFilterDto

    const nameValue = query.name as unknown
    this.name = typeof nameValue === 'string' ? nameValue : undefined

    const nikValue = query.nik as unknown
    this.nik = typeof nikValue === 'string' ? nikValue : undefined
  }



  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<EmployeeQueryFilterDto>[] = []

    if (this.name !== undefined && this.name !== null && this.name !== '') {
      whereCondition.push({ name: { [Op.like]: `%${this.name}%` } })
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
