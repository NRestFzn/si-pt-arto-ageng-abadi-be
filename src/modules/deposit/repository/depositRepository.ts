import Deposit from '@/database/model/deposit'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateDepositDto, UpdateDepositDto } from '../dto'
import { DepositQueryRepository } from './depositQueryRepository'

export class DepositRepository extends CrudRepository<
  Deposit,
  CreateDepositDto,
  UpdateDepositDto
> {
  constructor() {
    super(Deposit, DepositQueryRepository)
  }
}
