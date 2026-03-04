import Payroll from '@/database/model/payroll'
import { CrudService } from '@/modules/_shared/crudService'
import { CreatePayrollDto, UpdatePayrollDto } from '../dto'
import { PayrollRepository } from '../repository/payrollRepository'

export class PayrollService extends CrudService<
  Payroll,
  CreatePayrollDto,
  UpdatePayrollDto
> {
  constructor(private readonly payrollRepository = new PayrollRepository()) {
    super(payrollRepository)
  }
}
