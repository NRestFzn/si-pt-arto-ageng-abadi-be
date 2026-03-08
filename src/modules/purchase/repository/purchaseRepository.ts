import Purchase from '@/database/model/purchase'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreatePurchaseDto, UpdatePurchaseDto } from '../dto'
import { PurchaseQueryRepository } from './purchaseQueryRepository'

export class PurchaseRepository extends CrudRepository<
  Purchase,
  CreatePurchaseDto,
  UpdatePurchaseDto
> {
  constructor() {
    super(Purchase, PurchaseQueryRepository)
  }
}
