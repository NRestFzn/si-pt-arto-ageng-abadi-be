import UsageDeltaPressure from '@/database/model/usageDeltaPressure'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { UsageDeltaPressureQueryRepository } from './usageDeltaPressureQueryRepository'
import {
  CreateUsageDeltaPressureDto,
  UpdateUsageDeltaPressureDto,
} from '../dto'

export class UsageDeltaPressureRepository extends CrudRepository<
  UsageDeltaPressure,
  CreateUsageDeltaPressureDto,
  UpdateUsageDeltaPressureDto
> {
  constructor() {
    super(UsageDeltaPressure, UsageDeltaPressureQueryRepository)
  }
}
