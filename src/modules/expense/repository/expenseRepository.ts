import Expense from '@/database/model/expense'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateExpenseDto, UpdateExpenseDto } from '../dto'

export class ExpenseRepository extends CrudRepository<
  Expense,
  CreateExpenseDto,
  UpdateExpenseDto
> {
  constructor() {
    super(Expense)
  }
}
