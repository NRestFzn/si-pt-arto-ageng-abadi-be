import { Request } from 'express'
import { Op } from 'sequelize'
import Invoice from '@/database/model/invoice'
import Deposit from '@/database/model/deposit'
import Purchase from '@/database/model/purchase'
import Expense from '@/database/model/expense'
import { AccountingQueryRepository } from './accountingQueryRepository'
import { IncomeStatementDto } from '../dto'

export class AccountingRepository {
  private toNumber(value: number | string | null): number {
    return Number(value || 0)
  }

  async getIncomeStatement(req: Request): Promise<IncomeStatementDto> {
    const query = new AccountingQueryRepository(req)

    const dateWhere = query.getDateWhere('date')
    const logisticsCondition = {
      [Op.or]: [
        {
          expense_type: {
            [Op.like]: '%logistic%',
          },
        },
        {
          expense_type: {
            [Op.like]: '%logistik%',
          },
        },
      ],
    }

    const logisticsWhere = query.mergeWhere(dateWhere, logisticsCondition)

    const [
      salesRevenue,
      otherRevenue,
      purchaseCost,
      logisticsCost,
      totalExpense,
    ] = await Promise.all([
      Invoice.sum('total_bill', { where: dateWhere }),
      Deposit.sum('amount', { where: dateWhere }),
      Purchase.sum('total_sales', { where: dateWhere }),
      Expense.sum('total', { where: logisticsWhere }),
      Expense.sum('total', { where: dateWhere }),
    ])

    const sales = this.toNumber(salesRevenue)
    const other = this.toNumber(otherRevenue)
    const purchases = this.toNumber(purchaseCost)
    const logistics = this.toNumber(logisticsCost)
    const totalOperatingExpense = Math.max(
      this.toNumber(totalExpense) - logistics,
      0
    )

    const totalRevenue = sales + other
    const totalCogs = purchases + logistics
    const grossProfit = totalRevenue - totalCogs
    const netProfit = grossProfit - totalOperatingExpense

    return {
      period: {
        month: query.month || null,
        year: query.year || null,
      },
      revenue: {
        sales,
        other,
        total: totalRevenue,
      },
      cost_of_goods_sold: {
        purchases,
        logistics,
        total: totalCogs,
      },
      gross_profit: grossProfit,
      operating_expenses: totalOperatingExpense,
      net_profit: netProfit,
    }
  }
}
