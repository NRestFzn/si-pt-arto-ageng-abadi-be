export interface NavigationDto {
  id: string
  name: string
  path: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateNavigationDto {
  name: string
  path: string
}

export type UpdateNavigationDto = Partial<CreateNavigationDto>


export interface NavigationQueryFilterDto extends Partial<CreateNavigationDto> {}
