import { RoleDto } from '../role/dto'

export interface UserDto {
  id: string
  fullname: string
  email: string
  RoleId: string
  role?: RoleDto
  profilePicture?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserDto {
  fullname: string
  email: string
  password: string
  RoleId: string
}

export interface UpdateUserDto {
  fullname: string
  newPassword?: string | null
  confirmNewPassword?: string | null
}

export interface UserQueryFilterDto {
  fullname: string
}

export type UserLoginState = {
  uid: string
  RoleId: string
}
