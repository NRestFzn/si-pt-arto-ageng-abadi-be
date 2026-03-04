import { PettyCashService } from '@/modules/pettyCash/service/pettyCashService'
import {
  createPettyCashSchema,
  updatePettyCashSchema,
} from '@/modules/pettyCash/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new PettyCashService()

export const PettyCashController = createCrudController({
  service,
  createSchema: createPettyCashSchema,
  updateSchema: updatePettyCashSchema,
})
