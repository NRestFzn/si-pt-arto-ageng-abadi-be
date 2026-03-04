import Employee from '@/database/model/employee'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dto'

export class EmployeeRepository extends CrudRepository<
  Employee,
  CreateEmployeeDto,
  UpdateEmployeeDto
> {
  constructor() {
    super(Employee)
  }
}
