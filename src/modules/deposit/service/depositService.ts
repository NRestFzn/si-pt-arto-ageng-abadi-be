import Deposit from '@/database/model/deposit'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateDepositDto, UpdateDepositDto } from '../dto'
import { DepositRepository } from '../repository/depositRepository'

export class DepositService extends CrudService<
  Deposit,
  CreateDepositDto,
  UpdateDepositDto
> {
  constructor(private readonly depositRepository = new DepositRepository()) {
    super(depositRepository)
  }
}
