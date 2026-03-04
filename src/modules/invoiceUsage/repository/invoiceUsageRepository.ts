import InvoiceUsage from '@/database/model/invoiceUsage'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateInvoiceUsageDto, UpdateInvoiceUsageDto } from '../dto'

export class InvoiceUsageRepository extends CrudRepository<
  InvoiceUsage,
  CreateInvoiceUsageDto,
  UpdateInvoiceUsageDto
> {
  constructor() {
    super(InvoiceUsage)
  }
}
