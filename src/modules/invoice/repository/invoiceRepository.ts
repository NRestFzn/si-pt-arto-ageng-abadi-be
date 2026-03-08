import Invoice from '@/database/model/invoice'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto'
import { InvoiceQueryRepository } from './invoiceQueryRepository'

export class InvoiceRepository extends CrudRepository<
  Invoice,
  CreateInvoiceDto,
  UpdateInvoiceDto
> {
  constructor() {
    super(Invoice, InvoiceQueryRepository)
  }
}
