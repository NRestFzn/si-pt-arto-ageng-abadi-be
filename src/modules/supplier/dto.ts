export interface SupplierDto {
  id: string
  company_name: string
  address?: string
  phone_number?: string
  pic_name?: string
  pic_phone_number?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateSupplierDto {
  company_name: string
  address?: string
  phone_number?: string
  pic_name?: string
  pic_phone_number?: string
}

export type UpdateSupplierDto = Partial<CreateSupplierDto>


export interface SupplierQueryFilterDto extends Partial<CreateSupplierDto> {}
