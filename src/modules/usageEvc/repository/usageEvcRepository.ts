import UsageEvc from '@/database/model/usageEvc'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateUsageEvcDto, UpdateUsageEvcDto } from '../dto'
import { UsageEvcQueryRepository } from './usageEvcQueryRepository'

export class UsageEvcRepository extends CrudRepository<
  UsageEvc,
  CreateUsageEvcDto,
  UpdateUsageEvcDto
> {
  constructor() {
    super(UsageEvc, UsageEvcQueryRepository)
  }
}
