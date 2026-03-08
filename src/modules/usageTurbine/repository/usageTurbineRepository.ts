import UsageTurbine from '@/database/model/usageTurbine'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateUsageTurbineDto, UpdateUsageTurbineDto } from '../dto'
import { UsageTurbineQueryRepository } from './usageTurbineQueryRepository'

export class UsageTurbineRepository extends CrudRepository<
  UsageTurbine,
  CreateUsageTurbineDto,
  UpdateUsageTurbineDto
> {
  constructor() {
    super(UsageTurbine, UsageTurbineQueryRepository)
  }
}
