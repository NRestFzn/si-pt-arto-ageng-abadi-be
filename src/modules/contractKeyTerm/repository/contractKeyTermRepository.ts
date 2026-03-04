import ContractKeyTerm from '@/database/model/contractKeyTerm'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateContractKeyTermDto, UpdateContractKeyTermDto } from '../dto'

export class ContractKeyTermRepository extends CrudRepository<
  ContractKeyTerm,
  CreateContractKeyTermDto,
  UpdateContractKeyTermDto
> {
  constructor() {
    super(ContractKeyTerm)
  }
}
