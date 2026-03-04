import { ExpenseService } from '@/modules/expense/service/expenseService'
import {
  createExpenseSchema,
  updateExpenseSchema,
} from '@/modules/expense/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new ExpenseService()

export const ExpenseController = createCrudController({
  service,
  createSchema: createExpenseSchema,
  updateSchema: updateExpenseSchema,
})
