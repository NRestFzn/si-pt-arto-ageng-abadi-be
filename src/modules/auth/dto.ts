export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  fullname: string
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponseDto {
  fullname: string
  email: string
  RoleId: string
  uid: string
  accessToken: string
  expiresAt: Date
  expiresIn: number
}
