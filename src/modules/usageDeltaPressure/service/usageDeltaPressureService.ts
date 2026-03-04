import UsageDeltaPressure from '@/database/model/usageDeltaPressure'
import { CrudService } from '@/modules/_shared/crudService'
import {
  CreateUsageDeltaPressureDto,
  UpdateUsageDeltaPressureDto,
} from '../dto'
import { UsageDeltaPressureRepository } from '../repository/usageDeltaPressureRepository'

export class UsageDeltaPressureService extends CrudService<
  UsageDeltaPressure,
  CreateUsageDeltaPressureDto,
  UpdateUsageDeltaPressureDto
> {
  constructor(
    private readonly usageDeltaPressureRepository = new UsageDeltaPressureRepository()
  ) {
    super(usageDeltaPressureRepository)
  }
}
