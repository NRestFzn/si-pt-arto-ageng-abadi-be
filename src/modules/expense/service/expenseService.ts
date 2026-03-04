import Expense from '@/database/model/expense'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateExpenseDto, UpdateExpenseDto } from '../dto'
import { ExpenseRepository } from '../repository/expenseRepository'

export class ExpenseService extends CrudService<
  Expense,
  CreateExpenseDto,
  UpdateExpenseDto
> {
  constructor(private readonly expenseRepository = new ExpenseRepository()) {
    super(expenseRepository)
  }
}
