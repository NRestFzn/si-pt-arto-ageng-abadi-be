import PettyCash from '@/database/model/pettyCash'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreatePettyCashDto, UpdatePettyCashDto } from '../dto'

export class PettyCashRepository extends CrudRepository<
  PettyCash,
  CreatePettyCashDto,
  UpdatePettyCashDto
> {
  constructor() {
    super(PettyCash)
  }
}
