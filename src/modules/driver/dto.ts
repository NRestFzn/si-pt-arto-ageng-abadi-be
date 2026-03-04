export interface DriverDto {
  id: string
  name: string
  phone_number?: string
  nik?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateDriverDto {
  name: string
  phone_number?: string
  nik?: string
}

export type UpdateDriverDto = Partial<CreateDriverDto>
