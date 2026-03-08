import { CoACategoryService } from '@/modules/coaCategory/service/coaCategoryService'
import { coaCategorySchema } from '@/modules/coaCategory/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new CoACategoryService()

export const CoACategoryController = createCrudController({
  service,
  createSchema: coaCategorySchema,
  updateSchema: coaCategorySchema,
})
