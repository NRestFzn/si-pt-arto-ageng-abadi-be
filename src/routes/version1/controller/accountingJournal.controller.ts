import { AccountingJournalService } from '@/modules/accountingJournal/service/accountingJournalService'
import {
  createAccountingJournalSchema,
  updateAccountingJournalSchema,
} from '@/modules/accountingJournal/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new AccountingJournalService()

export const AccountingJournalController = createCrudController({
  service,
  createSchema: createAccountingJournalSchema,
  updateSchema: updateAccountingJournalSchema,
})
