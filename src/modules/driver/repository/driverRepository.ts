import Driver from '@/database/model/driver'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateDriverDto, UpdateDriverDto } from '../dto'
import { DriverQueryRepository } from './driverQueryRepository'

export class DriverRepository extends CrudRepository<
  Driver,
  CreateDriverDto,
  UpdateDriverDto
> {
  constructor() {
    super(Driver, DriverQueryRepository)
  }
}
