import { DepositService } from '@/modules/deposit/service/depositService'
import {
  createDepositSchema,
  updateDepositSchema,
} from '@/modules/deposit/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new DepositService()

export const DepositController = createCrudController({
  service,
  createSchema: createDepositSchema,
  updateSchema: updateDepositSchema,
})
