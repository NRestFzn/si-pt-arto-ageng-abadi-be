import ContractKeyTerm from '@/database/model/contractKeyTerm'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateContractKeyTermDto, UpdateContractKeyTermDto } from '../dto'
import { ContractKeyTermRepository } from '../repository/contractKeyTermRepository'

export class ContractKeyTermService extends CrudService<
  ContractKeyTerm,
  CreateContractKeyTermDto,
  UpdateContractKeyTermDto
> {
  constructor(
    private readonly contractKeyTermRepository = new ContractKeyTermRepository()
  ) {
    super(contractKeyTermRepository)
  }
}
