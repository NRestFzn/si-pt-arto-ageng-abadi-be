import ContractPjbg from '@/database/model/contractPjbg'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateContractPjbgDto, UpdateContractPjbgDto } from '../dto'

export class ContractPjbgRepository extends CrudRepository<
  ContractPjbg,
  CreateContractPjbgDto,
  UpdateContractPjbgDto
> {
  constructor() {
    super(ContractPjbg)
  }
}
