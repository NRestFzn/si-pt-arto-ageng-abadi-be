export interface CustomerDto {
  id: string
  company_name: string
  npwp?: string
  address?: string
  phone_number?: string
  pic_name?: string
  pic_phone_number?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateCustomerDto {
  company_name: string
  npwp?: string
  address?: string
  phone_number?: string
  pic_name?: string
  pic_phone_number?: string
}

export type UpdateCustomerDto = Partial<CreateCustomerDto>
