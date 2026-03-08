export interface UsageDeltaPressureDto {
  id: string
  date: Date
  customer_id: string
  license_plate?: string
  gtm_type?: string
  lwc?: number
  vol_nm3_at_200_bar_g?: number
  pressure_start?: number
  pressure_finish?: number
  pressure_difference?: number
  total_sm3?: number
  ghv?: number
  standard_1_sm3?: number
  mmbtu?: number
  mmbtu_per_sm3?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateUsageDeltaPressureDto {
  date: Date
  customer_id: string
  license_plate?: string
  gtm_type?: string
  lwc?: number
  vol_nm3_at_200_bar_g?: number
  pressure_start?: number
  pressure_finish?: number
  pressure_difference?: number
  total_sm3?: number
  ghv?: number
  standard_1_sm3?: number
  mmbtu?: number
  mmbtu_per_sm3?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
}

export type UpdateUsageDeltaPressureDto = Partial<CreateUsageDeltaPressureDto>


export interface UsageDeltaPressureQueryFilterDto extends Partial<CreateUsageDeltaPressureDto> {}
