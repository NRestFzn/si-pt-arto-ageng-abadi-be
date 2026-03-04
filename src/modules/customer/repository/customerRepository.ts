import Customer from '@/database/model/customer'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateCustomerDto, UpdateCustomerDto } from '../dto'

export class CustomerRepository extends CrudRepository<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor() {
    super(Customer)
  }
}
