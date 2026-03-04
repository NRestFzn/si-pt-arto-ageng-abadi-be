import { UsageEvcService } from '@/modules/usageEvc/service/usageEvcService'
import {
  createUsageEvcSchema,
  updateUsageEvcSchema,
} from '@/modules/usageEvc/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new UsageEvcService()

export const UsageEvcController = createCrudController({
  service,
  createSchema: createUsageEvcSchema,
  updateSchema: updateUsageEvcSchema,
})
