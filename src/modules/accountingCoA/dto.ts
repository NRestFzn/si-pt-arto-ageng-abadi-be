import { CoACategoryDto } from '../coaCategory/dto'

export interface AccountingCoADto {
  id: string
  code: string
  name: string
  initialBalance: number
  CoACategoryId: string
  coaCategory: CoACategoryDto
  createdAt: Date
  updatedAt: Date
}

export interface CreateAccountingCoADto {
  code: string
  name: string
  initialBalance: number
  CoACategoryId: string
}

export interface UpdateAccountingCoADto {
  code: string
  name: string
  initialBalance: number
  CoACategoryId: string
}

export interface AccountingCoAQueryFilterDto {
  code: string
  name: string
  initialBalance: number
  CoACategoryId: string
}
