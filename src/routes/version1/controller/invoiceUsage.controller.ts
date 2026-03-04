import { InvoiceUsageService } from '@/modules/invoiceUsage/service/invoiceUsageService'
import {
  createInvoiceUsageSchema,
  updateInvoiceUsageSchema,
} from '@/modules/invoiceUsage/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new InvoiceUsageService()

export const InvoiceUsageController = createCrudController({
  service,
  createSchema: createInvoiceUsageSchema,
  updateSchema: updateInvoiceUsageSchema,
})
