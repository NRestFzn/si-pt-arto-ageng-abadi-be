import { InvoiceService } from '@/modules/invoice/service/invoiceService'
import {
  createInvoiceSchema,
  updateInvoiceSchema,
} from '@/modules/invoice/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new InvoiceService()

export const InvoiceController = createCrudController({
  service,
  createSchema: createInvoiceSchema,
  updateSchema: updateInvoiceSchema,
})
