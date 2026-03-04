export interface ContractKeyTermDto {
  id: string
  offer_number?: string
  offer_date?: Date
  customer_id: string
  volume?: number
  duration?: string
  price_type?: string
  moq?: number
  billing_type?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateContractKeyTermDto {
  customer_id: string
  offer_number?: string
  offer_date?: Date
  volume?: number
  duration?: string
  price_type?: string
  moq?: number
  billing_type?: string
}

export type UpdateContractKeyTermDto = Partial<CreateContractKeyTermDto>
