import { OfferService } from '@/modules/offer/service/offerService'
import { createOfferSchema, updateOfferSchema } from '@/modules/offer/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new OfferService()

export const OfferController = createCrudController({
  service,
  createSchema: createOfferSchema,
  updateSchema: updateOfferSchema,
})
