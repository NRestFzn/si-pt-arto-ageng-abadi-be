import ContractPjbg from '@/database/model/contractPjbg'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateContractPjbgDto, UpdateContractPjbgDto } from '../dto'
import { ContractPjbgRepository } from '../repository/contractPjbgRepository'

export class ContractPjbgService extends CrudService<
  ContractPjbg,
  CreateContractPjbgDto,
  UpdateContractPjbgDto
> {
  constructor(
    private readonly contractPjbgRepository = new ContractPjbgRepository()
  ) {
    super(contractPjbgRepository)
  }
}
