import { UsageTurbineService } from '@/modules/usageTurbine/service/usageTurbineService'
import {
  createUsageTurbineSchema,
  updateUsageTurbineSchema,
} from '@/modules/usageTurbine/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new UsageTurbineService()

export const UsageTurbineController = createCrudController({
  service,
  createSchema: createUsageTurbineSchema,
  updateSchema: updateUsageTurbineSchema,
})
