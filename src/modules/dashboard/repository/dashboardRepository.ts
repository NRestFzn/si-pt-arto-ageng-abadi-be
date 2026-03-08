import { Request } from 'express'
import Customer from '@/database/model/customer'
import Supplier from '@/database/model/supplier'
import Employee from '@/database/model/employee'
import Invoice from '@/database/model/invoice'
import Purchase from '@/database/model/purchase'
import Expense from '@/database/model/expense'
import Deposit from '@/database/model/deposit'
import CashAdvance from '@/database/model/cashAdvance'
import { DashboardSummaryDto } from '../dto'
import { DashboardQueryRepository } from './dashboardQueryRepository'

export class DashboardRepository {
  private toNumber(value: number | string | null): number {
    return Number(value || 0)
  }

  async getSummary(req: Request): Promise<DashboardSummaryDto> {
    const query = new DashboardQueryRepository(req)
    const dateWhere = query.getDateWhere('date')

    const [
      customers,
      suppliers,
      employees,
      invoices,
      purchases,
      expenses,
      deposits,
      cashAdvances,
      invoiceTotal,
      purchaseTotal,
      expenseTotal,
      depositTotal,
      cashAdvanceTotal,
    ] = await Promise.all([
      Customer.count(),
      Supplier.count(),
      Employee.count(),
      Invoice.count({ where: dateWhere }),
      Purchase.count({ where: dateWhere }),
      Expense.count({ where: dateWhere }),
      Deposit.count({ where: dateWhere }),
      CashAdvance.count({ where: dateWhere }),
      Invoice.sum('total_bill', { where: dateWhere }),
      Purchase.sum('total_sales', { where: dateWhere }),
      Expense.sum('total', { where: dateWhere }),
      Deposit.sum('amount', { where: dateWhere }),
      CashAdvance.sum('amount', { where: dateWhere }),
    ])

    const invoiceTotalValue = this.toNumber(invoiceTotal)
    const purchaseTotalValue = this.toNumber(purchaseTotal)
    const expenseTotalValue = this.toNumber(expenseTotal)
    const depositTotalValue = this.toNumber(depositTotal)
    const cashAdvanceTotalValue = this.toNumber(cashAdvanceTotal)

    return {
      period: {
        month: query.month || null,
        year: query.year || null,
      },
      masters: {
        customers,
        suppliers,
        employees,
      },
      transactions: {
        invoices,
        purchases,
        expenses,
        deposits,
        cash_advances: cashAdvances,
      },
      amounts: {
        invoice_total: invoiceTotalValue,
        purchase_total: purchaseTotalValue,
        expense_total: expenseTotalValue,
        deposit_total: depositTotalValue,
        cash_advance_total: cashAdvanceTotalValue,
        net_amount:
          invoiceTotalValue +
          depositTotalValue -
          (purchaseTotalValue + expenseTotalValue + cashAdvanceTotalValue),
      },
    }
  }
}
