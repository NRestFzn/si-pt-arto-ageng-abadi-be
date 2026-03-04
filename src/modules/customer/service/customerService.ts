import Customer from '@/database/model/customer'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateCustomerDto, UpdateCustomerDto } from '../dto'
import { CustomerRepository } from '../repository/customerRepository'

export class CustomerService extends CrudService<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor(private readonly customerRepository = new CustomerRepository()) {
    super(customerRepository)
  }
}
