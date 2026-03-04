import Purchase from '@/database/model/purchase'
import { CrudService } from '@/modules/_shared/crudService'
import { CreatePurchaseDto, UpdatePurchaseDto } from '../dto'
import { PurchaseRepository } from '../repository/purchaseRepository'

export class PurchaseService extends CrudService<
  Purchase,
  CreatePurchaseDto,
  UpdatePurchaseDto
> {
  constructor(private readonly purchaseRepository = new PurchaseRepository()) {
    super(purchaseRepository)
  }
}
