export interface InvoiceDto {
  id: string
  customer_id: string
  invoice_number?: string
  date?: Date
  po_number?: string
  po_date?: Date
  period_start?: Date
  period_end?: Date
  total_usage?: number
  deposit_deduction?: number
  total_bill?: number
  note?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateInvoiceDto {
  customer_id: string
  invoice_number?: string
  date?: Date
  po_number?: string
  po_date?: Date
  period_start?: Date
  period_end?: Date
  total_usage?: number
  deposit_deduction?: number
  total_bill?: number
  note?: string
}

export type UpdateInvoiceDto = Partial<CreateInvoiceDto>
