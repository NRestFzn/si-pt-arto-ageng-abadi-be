import { Request } from 'express'
import { Op, WhereOptions } from 'sequelize'
import { IncomeStatementQueryDto } from '../dto'

export class AccountingQueryRepository {
  public month?: number
  public year?: number

  constructor(req: Request) {
    const query = req.query as unknown as IncomeStatementQueryDto

    this.month = this.parseNumber(query.month)
    this.year = this.parseNumber(query.year)
  }

  private parseNumber(value?: string): number | undefined {
    if (!value) return undefined

    const parsed = Number(value)
    return Number.isNaN(parsed) ? undefined : parsed
  }

  private getDateRange(): { startDate: Date; endDate: Date } | null {
    if (!this.month && !this.year) return null

    const targetYear = this.year || new Date().getFullYear()

    if (this.month) {
      if (this.month < 1 || this.month > 12) return null

      return {
        startDate: new Date(targetYear, this.month - 1, 1),
        endDate: new Date(targetYear, this.month, 0),
      }
    }

    return {
      startDate: new Date(targetYear, 0, 1),
      endDate: new Date(targetYear, 11, 31),
    }
  }

  public getDateWhere(columnName: string): WhereOptions {
    const dateRange = this.getDateRange()

    if (!dateRange) {
      return {}
    }

    return {
      [columnName]: {
        [Op.between]: [dateRange.startDate, dateRange.endDate],
      },
    }
  }

  public mergeWhere(...conditions: WhereOptions[]): WhereOptions {
    const filteredConditions = conditions.filter(
      (condition) => Object.keys(condition).length
    )

    if (!filteredConditions.length) {
      return {}
    }

    if (filteredConditions.length === 1) {
      return filteredConditions[0]
    }

    return {
      [Op.and]: filteredConditions,
    }
  }
}
