import Navigation from '@/database/model/navigation'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateNavigationDto, UpdateNavigationDto } from '../dto'
import { NavigationRepository } from '../repository/navigationRepository'

export class NavigationService extends CrudService<
  Navigation,
  CreateNavigationDto,
  UpdateNavigationDto
> {
  constructor(
    private readonly navigationRepository = new NavigationRepository()
  ) {
    super(navigationRepository)
  }
}
