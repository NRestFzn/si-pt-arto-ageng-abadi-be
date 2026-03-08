export interface IncomeStatementQueryDto {
  month?: string
  year?: string
}

export interface IncomeStatementDto {
  period: {
    month: number | null
    year: number | null
  }
  revenue: {
    sales: number
    other: number
    total: number
  }
  cost_of_goods_sold: {
    purchases: number
    logistics: number
    total: number
  }
  gross_profit: number
  operating_expenses: number
  net_profit: number
}
