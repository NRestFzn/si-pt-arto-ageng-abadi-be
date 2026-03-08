export interface DashboardSummaryQueryDto {
  month?: string
  year?: string
}

export interface DashboardSummaryDto {
  period: {
    month: number | null
    year: number | null
  }
  masters: {
    customers: number
    suppliers: number
    employees: number
  }
  transactions: {
    invoices: number
    purchases: number
    expenses: number
    deposits: number
    cash_advances: number
  }
  amounts: {
    invoice_total: number
    purchase_total: number
    expense_total: number
    deposit_total: number
    cash_advance_total: number
    net_amount: number
  }
}
