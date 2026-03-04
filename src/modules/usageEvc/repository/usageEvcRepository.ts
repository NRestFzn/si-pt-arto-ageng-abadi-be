import UsageEvc from '@/database/model/usageEvc'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateUsageEvcDto, UpdateUsageEvcDto } from '../dto'

export class UsageEvcRepository extends CrudRepository<
  UsageEvc,
  CreateUsageEvcDto,
  UpdateUsageEvcDto
> {
  constructor() {
    super(UsageEvc)
  }
}
