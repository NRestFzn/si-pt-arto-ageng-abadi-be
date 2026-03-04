export interface PurchaseDto {
  id: string
  date: Date
  supplier_id: string
  license_plate?: string
  gtm_type?: string
  do_number?: string
  driver_id: string
  ghc?: number
  pressure_start?: number
  pressure_finish?: number
  meter_start?: number
  meter_finish?: number
  metering_fill_post?: number
  volume_mmscf?: number
  volume_mmbtu?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
  createdAt: Date
  updatedAt: Date
}

export interface CreatePurchaseDto {
  date: Date
  supplier_id: string
  driver_id: string
  license_plate?: string
  gtm_type?: string
  do_number?: string
  ghc?: number
  pressure_start?: number
  pressure_finish?: number
  meter_start?: number
  meter_finish?: number
  metering_fill_post?: number
  volume_mmscf?: number
  volume_mmbtu?: number
  currency?: string
  exchange_rate?: number
  price_per_sm3?: number
  total_sales?: number
}

export type UpdatePurchaseDto = Partial<CreatePurchaseDto>
