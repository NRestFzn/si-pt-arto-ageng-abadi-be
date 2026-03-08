import CashAdvance from '@/database/model/cashAdvance'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateCashAdvanceDto, UpdateCashAdvanceDto } from '../dto'
import { CashAdvanceQueryRepository } from './cashAdvanceQueryRepository'

export class CashAdvanceRepository extends CrudRepository<
  CashAdvance,
  CreateCashAdvanceDto,
  UpdateCashAdvanceDto
> {
  constructor() {
    super(CashAdvance, CashAdvanceQueryRepository)
  }
}
