import { CustomerService } from '@/modules/customer/service/customerService'
import {
  createCustomerSchema,
  updateCustomerSchema,
} from '@/modules/customer/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new CustomerService()

export const CustomerController = createCrudController({
  service,
  createSchema: createCustomerSchema,
  updateSchema: updateCustomerSchema,
})
