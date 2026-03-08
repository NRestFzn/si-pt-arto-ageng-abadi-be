import { AccountingCoAService } from '@/modules/accountingCoA/service/accountingCoAService'
import {
  createAccountingCoASchema,
  updateAccountingCoASchema,
} from '@/modules/accountingCoA/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new AccountingCoAService()

export const AccountingCoAController = createCrudController({
  service,
  createSchema: createAccountingCoASchema,
  updateSchema: updateAccountingCoASchema,
})
