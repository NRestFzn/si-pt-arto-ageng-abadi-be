import UsageEvc from '@/database/model/usageEvc'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateUsageEvcDto, UpdateUsageEvcDto } from '../dto'
import { UsageEvcRepository } from '../repository/usageEvcRepository'

export class UsageEvcService extends CrudService<
  UsageEvc,
  CreateUsageEvcDto,
  UpdateUsageEvcDto
> {
  constructor(private readonly usageEvcRepository = new UsageEvcRepository()) {
    super(usageEvcRepository)
  }
}
