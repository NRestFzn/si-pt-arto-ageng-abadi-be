import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { AccountingJournalQueryFilterDto } from '../dto'

export class AccountingJournalQueryRepository extends BaseQueryRequest {
  public description?: string
  public source_module?: string
  public month?: number
  public year?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as AccountingJournalQueryFilterDto

    this.description = query.description
    this.source_module = query.source_module
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

  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions[] = []

    if (this.description) {
      whereCondition.push({
        description: {
          [Op.like]: `%${this.description}%`,
        },
      })
    }

    if (this.source_module) {
      whereCondition.push({
        source_module: {
          [Op.like]: `%${this.source_module}%`,
        },
      })
    }

    const dateRange = this.getDateRange()
    if (dateRange) {
      whereCondition.push({
        transaction_date: {
          [Op.between]: [dateRange.startDate, dateRange.endDate],
        },
      })
    }

    return {
      where: whereCondition.length ? { [Op.and]: whereCondition } : {},
      limit: this.limit,
      offset: this.offset,
      order: this.order,
    }
  }
}
