import { PurchaseService } from '@/modules/purchase/service/purchaseService'
import {
  createPurchaseSchema,
  updatePurchaseSchema,
} from '@/modules/purchase/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new PurchaseService()

export const PurchaseController = createCrudController({
  service,
  createSchema: createPurchaseSchema,
  updateSchema: updatePurchaseSchema,
})
