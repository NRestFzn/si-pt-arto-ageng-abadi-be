import { SupplierService } from '@/modules/supplier/service/supplierService'
import {
  createSupplierSchema,
  updateSupplierSchema,
} from '@/modules/supplier/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new SupplierService()

export const SupplierController = createCrudController({
  service,
  createSchema: createSupplierSchema,
  updateSchema: updateSupplierSchema,
})
