import Offer from '@/database/model/offer'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateOfferDto, UpdateOfferDto } from '../dto'

export class OfferRepository extends CrudRepository<
  Offer,
  CreateOfferDto,
  UpdateOfferDto
> {
  constructor() {
    super(Offer)
  }
}
