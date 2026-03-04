export interface OfferDto {
  id: string
  offer_number?: string
  date?: Date
  customer_id: string
  implementation?: string
  monthly_cng_usage_volume?: number
  standard_ghv_specification?: string
  cng_mother_station_location?: string
  cng_gas_price_per_sm3?: number
  payment_method?: string
  price_includes?: string
  contract_period?: string
  preparation_time?: string
  validity?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateOfferDto {
  customer_id: string
  offer_number?: string
  date?: Date
  implementation?: string
  monthly_cng_usage_volume?: number
  standard_ghv_specification?: string
  cng_mother_station_location?: string
  cng_gas_price_per_sm3?: number
  payment_method?: string
  price_includes?: string
  contract_period?: string
  preparation_time?: string
  validity?: string
}

export type UpdateOfferDto = Partial<CreateOfferDto>
