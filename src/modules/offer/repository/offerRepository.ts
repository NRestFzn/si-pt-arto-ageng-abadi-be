import Offer from '@/database/model/offer'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateOfferDto, UpdateOfferDto } from '../dto'
import { OfferQueryRepository } from './offerQueryRepository'

export class OfferRepository extends CrudRepository<
  Offer,
  CreateOfferDto,
  UpdateOfferDto
> {
  constructor() {
    super(Offer, OfferQueryRepository)
  }
}
