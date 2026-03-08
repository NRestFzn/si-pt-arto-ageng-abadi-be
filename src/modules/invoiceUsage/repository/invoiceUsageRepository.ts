import InvoiceUsage from '@/database/model/invoiceUsage'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateInvoiceUsageDto, UpdateInvoiceUsageDto } from '../dto'
import { InvoiceUsageQueryRepository } from './invoiceUsageQueryRepository'

export class InvoiceUsageRepository extends CrudRepository<
  InvoiceUsage,
  CreateInvoiceUsageDto,
  UpdateInvoiceUsageDto
> {
  constructor() {
    super(InvoiceUsage, InvoiceUsageQueryRepository)
  }
}
