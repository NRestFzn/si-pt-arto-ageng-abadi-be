import { UsageDeltaPressureService } from '@/modules/usageDeltaPressure/service/usageDeltaPressureService'
import {
  createUsageDeltaPressureSchema,
  updateUsageDeltaPressureSchema,
} from '@/modules/usageDeltaPressure/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new UsageDeltaPressureService()

export const UsageDeltaPressureController = createCrudController({
  service,
  createSchema: createUsageDeltaPressureSchema,
  updateSchema: updateUsageDeltaPressureSchema,
})
