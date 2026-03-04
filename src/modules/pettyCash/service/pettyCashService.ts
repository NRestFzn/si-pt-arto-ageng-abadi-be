import PettyCash from '@/database/model/pettyCash'
import { CrudService } from '@/modules/_shared/crudService'
import { CreatePettyCashDto, UpdatePettyCashDto } from '../dto'
import { PettyCashRepository } from '../repository/pettyCashRepository'

export class PettyCashService extends CrudService<
  PettyCash,
  CreatePettyCashDto,
  UpdatePettyCashDto
> {
  constructor(
    private readonly pettyCashRepository = new PettyCashRepository()
  ) {
    super(pettyCashRepository)
  }
}
