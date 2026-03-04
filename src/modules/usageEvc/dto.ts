export interface UsageEvcDto {
  id: string
  date: Date
  customer_id: string
  license_plate?: string
  gtm_number?: string
  turbine_start?: number
  turbine_finish?: number
  turbine_difference?: number
  evc_start?: number
  evc_finish?: number
  evc_difference_sm3?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateUsageEvcDto {
  date: Date
  customer_id: string
  license_plate?: string
  gtm_number?: string
  turbine_start?: number
  turbine_finish?: number
  turbine_difference?: number
  evc_start?: number
  evc_finish?: number
  evc_difference_sm3?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
}

export type UpdateUsageEvcDto = Partial<CreateUsageEvcDto>
