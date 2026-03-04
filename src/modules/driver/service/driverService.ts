import Driver from '@/database/model/driver'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateDriverDto, UpdateDriverDto } from '../dto'
import { DriverRepository } from '../repository/driverRepository'

export class DriverService extends CrudService<
  Driver,
  CreateDriverDto,
  UpdateDriverDto
> {
  constructor(private readonly driverRepository = new DriverRepository()) {
    super(driverRepository)
  }
}
