import UsageTurbine from '@/database/model/usageTurbine'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateUsageTurbineDto, UpdateUsageTurbineDto } from '../dto'
import { UsageTurbineRepository } from '../repository/usageTurbineRepository'

export class UsageTurbineService extends CrudService<
  UsageTurbine,
  CreateUsageTurbineDto,
  UpdateUsageTurbineDto
> {
  constructor(
    private readonly usageTurbineRepository = new UsageTurbineRepository()
  ) {
    super(usageTurbineRepository)
  }
}
