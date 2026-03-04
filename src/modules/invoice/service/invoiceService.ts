import Invoice from '@/database/model/invoice'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dto'
import { InvoiceRepository } from '../repository/invoiceRepository'

export class InvoiceService extends CrudService<
  Invoice,
  CreateInvoiceDto,
  UpdateInvoiceDto
> {
  constructor(private readonly invoiceRepository = new InvoiceRepository()) {
    super(invoiceRepository)
  }
}
