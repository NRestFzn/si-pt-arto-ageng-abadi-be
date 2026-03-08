export interface ExpenseDto {
  id: string
  expense_type?: string
  customer_id: string
  date?: Date
  description?: string
  quantity?: number
  unit_price?: number
  total?: number
  account?: string
  payment_method?: string
  bank_account?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateExpenseDto {
  customer_id: string
  expense_type?: string
  date?: Date
  description?: string
  quantity?: number
  unit_price?: number
  total?: number
  account?: string
  payment_method?: string
  bank_account?: string
}

export type UpdateExpenseDto = Partial<CreateExpenseDto>


export interface ExpenseQueryFilterDto extends Partial<CreateExpenseDto> {}
