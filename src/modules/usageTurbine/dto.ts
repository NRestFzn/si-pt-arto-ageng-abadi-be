export interface UsageTurbineDto {
  id: string
  date: Date
  customer_id: string
  gtm_number?: string
  turbine_start?: number
  turbine_finish?: number
  turbine_difference?: number
  supply_pressure?: number
  temp_avg_prs?: number
  compression_factor?: number
  temp_base?: number
  pressure_standard?: number
  pressure_atm_standard?: number
  total_sm3?: number
  ghv?: number
  standard_1_sm3?: number
  mmbtu?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateUsageTurbineDto {
  date: Date
  customer_id: string
  gtm_number?: string
  turbine_start?: number
  turbine_finish?: number
  turbine_difference?: number
  supply_pressure?: number
  temp_avg_prs?: number
  compression_factor?: number
  temp_base?: number
  pressure_standard?: number
  pressure_atm_standard?: number
  total_sm3?: number
  ghv?: number
  standard_1_sm3?: number
  mmbtu?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
}

export type UpdateUsageTurbineDto = Partial<CreateUsageTurbineDto>
