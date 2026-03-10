import { Op } from 'sequelize'
import Navigation, { NavigationGroups } from '@/database/model/navigation'
import { CrudService } from '@/modules/_shared/crudService'
import { CreateNavigationDto, NavigationGroupedDto, UpdateNavigationDto } from '../dto'
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

  async getGrouped(): Promise<NavigationGroupedDto[]> {
    const rows = await Navigation.findAll({
      where: { group: { [Op.ne]: null } },
      attributes: ['id', 'title', 'url', 'icon', 'group'],
      order: [['group', 'ASC'], ['title', 'ASC']],
    })

    const groupMap = new Map<string, NavigationGroupedDto>()

    for (const group of NavigationGroups) {
      groupMap.set(group, { group, items: [] })
    }

    for (const nav of rows) {
      const entry = groupMap.get(nav.group)
      if (entry) {
        entry.items.push({
          id: nav.id,
          title: nav.title,
          url: nav.url,
          icon: nav.icon ?? null,
        })
      }
    }

    return [...groupMap.values()].filter((g) => g.items.length > 0)
  }
}
