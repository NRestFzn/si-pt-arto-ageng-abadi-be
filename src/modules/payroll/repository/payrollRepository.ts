import Payroll from '@/database/model/payroll'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreatePayrollDto, UpdatePayrollDto } from '../dto'

export class PayrollRepository extends CrudRepository<
  Payroll,
  CreatePayrollDto,
  UpdatePayrollDto
> {
  constructor() {
    super(Payroll)
  }
}
