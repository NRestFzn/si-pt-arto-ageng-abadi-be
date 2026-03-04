import InvoiceUsage from '@/database/model/invoiceUsage'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateInvoiceUsageDto, UpdateInvoiceUsageDto } from '../dto'
import { InvoiceUsageRepository } from '../repository/invoiceUsageRepository'

export class InvoiceUsageService extends CrudService<
  InvoiceUsage,
  CreateInvoiceUsageDto,
  UpdateInvoiceUsageDto
> {
  constructor(
    private readonly invoiceUsageRepository = new InvoiceUsageRepository()
  ) {
    super(invoiceUsageRepository)
  }
}
