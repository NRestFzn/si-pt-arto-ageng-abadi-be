import Purchase from '@/database/model/purchase'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreatePurchaseDto, UpdatePurchaseDto } from '../dto'

export class PurchaseRepository extends CrudRepository<
  Purchase,
  CreatePurchaseDto,
  UpdatePurchaseDto
> {
  constructor() {
    super(Purchase)
  }
}
