export interface PettyCashDto {
  id: string
  expense_type?: string
  date?: Date
  customer_id: string
  description?: string
  quantity?: number
  unit_price?: number
  total?: number
  transaction_type?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreatePettyCashDto {
  customer_id: string
  expense_type?: string
  date?: Date
  description?: string
  quantity?: number
  unit_price?: number
  total?: number
  transaction_type?: string
}

export type UpdatePettyCashDto = Partial<CreatePettyCashDto>


export interface PettyCashQueryFilterDto extends Partial<CreatePettyCashDto> {}
