export interface DepositDto {
  id: string
  customer_id: string
  date?: Date
  amount?: number
  chart_of_account?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateDepositDto {
  customer_id: string
  date?: Date
  amount?: number
  chart_of_account?: string
}

export type UpdateDepositDto = Partial<CreateDepositDto>
