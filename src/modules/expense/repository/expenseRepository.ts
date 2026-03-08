import Expense from '@/database/model/expense'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateExpenseDto, UpdateExpenseDto } from '../dto'
import { ExpenseQueryRepository } from './expenseQueryRepository'

export class ExpenseRepository extends CrudRepository<
  Expense,
  CreateExpenseDto,
  UpdateExpenseDto
> {
  constructor() {
    super(Expense, ExpenseQueryRepository)
  }
}
