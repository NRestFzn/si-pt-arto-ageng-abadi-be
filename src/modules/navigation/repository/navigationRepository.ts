import Navigation from '@/database/model/navigation'
import { CrudRepository } from '@/modules/_shared/crudRepository'
import { CreateNavigationDto, UpdateNavigationDto } from '../dto'

export class NavigationRepository extends CrudRepository<
  Navigation,
  CreateNavigationDto,
  UpdateNavigationDto
> {
  constructor() {
    super(Navigation)
  }
}
