export interface CashAdvanceDto {
  id: string
  date?: Date
  description?: string
  employee_id: string
  amount?: number
  monthly_deduction?: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateCashAdvanceDto {
  employee_id: string
  date?: Date
  description?: string
  amount?: number
  monthly_deduction?: number
}

export type UpdateCashAdvanceDto = Partial<CreateCashAdvanceDto>

export interface ApproveCashAdvanceDto {
  note?: string
}

export interface RejectCashAdvanceDto {
  reason: string
}
