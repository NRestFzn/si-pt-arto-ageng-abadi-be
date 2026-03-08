import Customer from '@/database/model/customer'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateCustomerDto, UpdateCustomerDto } from '../dto'
import { CustomerQueryRepository } from './customerQueryRepository'

export class CustomerRepository extends CrudRepository<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor() {
    super(Customer, CustomerQueryRepository)
  }
}
