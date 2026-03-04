import { DriverService } from '@/modules/driver/service/driverService'
import { createDriverSchema, updateDriverSchema } from '@/modules/driver/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new DriverService()

export const DriverController = createCrudController({
  service,
  createSchema: createDriverSchema,
  updateSchema: updateDriverSchema,
})
