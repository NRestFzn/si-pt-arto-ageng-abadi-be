export interface UserHasNavigationDto {
  user_id: string
  navigation_id: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserHasNavigationDto {
  user_id: string
  navigation_id: string
}

export type UpdateUserHasNavigationDto = Partial<CreateUserHasNavigationDto>

export interface UserHasNavigationQueryFilterDto extends Partial<CreateUserHasNavigationDto> {}
