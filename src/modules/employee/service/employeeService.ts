import Employee from '@/database/model/employee'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dto'
import { EmployeeRepository } from '../repository/employeeRepository'

export class EmployeeService extends CrudService<
  Employee,
  CreateEmployeeDto,
  UpdateEmployeeDto
> {
  constructor(private readonly employeeRepository = new EmployeeRepository()) {
    super(employeeRepository)
  }
}
