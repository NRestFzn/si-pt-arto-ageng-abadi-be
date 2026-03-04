import Deposit from '@/database/model/deposit'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateDepositDto, UpdateDepositDto } from '../dto'

export class DepositRepository extends CrudRepository<
  Deposit,
  CreateDepositDto,
  UpdateDepositDto
> {
  constructor() {
    super(Deposit)
  }
}
