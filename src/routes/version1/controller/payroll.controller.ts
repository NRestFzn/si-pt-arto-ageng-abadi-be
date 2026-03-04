import { PayrollService } from '@/modules/payroll/service/payrollService'
import {
  createPayrollSchema,
  updatePayrollSchema,
} from '@/modules/payroll/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new PayrollService()

export const PayrollController = createCrudController({
  service,
  createSchema: createPayrollSchema,
  updateSchema: updatePayrollSchema,
})
