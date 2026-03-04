import Offer from '@/database/model/offer'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateOfferDto, UpdateOfferDto } from '../dto'
import { OfferRepository } from '../repository/offerRepository'

export class OfferService extends CrudService<
  Offer,
  CreateOfferDto,
  UpdateOfferDto
> {
  constructor(private readonly offerRepository = new OfferRepository()) {
    super(offerRepository)
  }
}
