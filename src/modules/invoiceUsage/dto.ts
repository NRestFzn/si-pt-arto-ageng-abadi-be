export interface InvoiceUsageDto {
  id: string
  invoice_id: string
  usage_type: string
  usage_id: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateInvoiceUsageDto {
  invoice_id: string
  usage_type: string
  usage_id: string
}

export type UpdateInvoiceUsageDto = Partial<CreateInvoiceUsageDto>
