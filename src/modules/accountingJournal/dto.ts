export interface AccountingJournalEntryDto {
  id: string
  accounting_journal_id: string
  account_code: string
  debit: number
  credit: number
  createdAt: Date
  updatedAt: Date
}

export interface AccountingJournalDto {
  id: string
  transaction_date: Date
  description: string
  source_module: string
  entries: AccountingJournalEntryDto[]
  createdAt: Date
  updatedAt: Date
}

export interface CreateAccountingJournalEntryDto {
  account_code: string
  debit: number
  credit: number
}

export interface UpdateAccountingJournalEntryDto {
  id?: string
  account_code: string
  debit: number
  credit: number
}

export interface CreateAccountingJournalDto {
  transaction_date: Date
  description: string
  source_module: string
  entries: CreateAccountingJournalEntryDto[]
}

export interface UpdateAccountingJournalDto {
  transaction_date?: Date
  description?: string
  source_module?: string
  entries?: UpdateAccountingJournalEntryDto[]
  removed_entry_ids?: string[]
}

export interface AccountingJournalQueryFilterDto {
  description?: string
  source_module?: string
  month?: string
  year?: string
}
