import { NavigationGroups, type NavigationGroup } from '@/database/model/navigation'

export { NavigationGroups, type NavigationGroup }

export interface NavigationDto {
  id: string
  title: string
  url: string
  icon: string | null
  group: NavigationGroup | null
  createdAt: Date
  updatedAt: Date
}

export interface NavigationGroupedDto {
  group: NavigationGroup
  items: Pick<NavigationDto, 'id' | 'title' | 'url' | 'icon'>[]
}

export interface CreateNavigationDto {
  title: string
  url: string
  icon?: string
  group?: NavigationGroup
}

export type UpdateNavigationDto = Partial<CreateNavigationDto>

export interface NavigationQueryFilterDto extends Partial<Pick<CreateNavigationDto, 'title' | 'url' | 'group'>> {}
