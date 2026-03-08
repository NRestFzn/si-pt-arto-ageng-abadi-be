export interface RoleHasNavigationDto {
  role_id: string
  navigation_id: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateRoleHasNavigationDto {
  role_id: string
  navigation_id: string
}

export type UpdateRoleHasNavigationDto = Partial<CreateRoleHasNavigationDto>

export interface RoleHasNavigationQueryFilterDto extends Partial<CreateRoleHasNavigationDto> {}
