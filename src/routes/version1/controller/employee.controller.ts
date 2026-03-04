import { EmployeeService } from '@/modules/employee/service/employeeService'
import {
  createEmployeeSchema,
  updateEmployeeSchema,
} from '@/modules/employee/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new EmployeeService()

export const EmployeeController = createCrudController({
  service,
  createSchema: createEmployeeSchema,
  updateSchema: updateEmployeeSchema,
})
