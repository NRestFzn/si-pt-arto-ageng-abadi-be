import { Request } from 'express'
import { FindOptions, Op, WhereOptions } from 'sequelize'
import { BaseQueryRequest } from '@/routes/version1/request/_baseQueryRequest'
import { PayrollQueryFilterDto } from '../dto'

export class PayrollQueryRepository extends BaseQueryRequest {
  public employee_id?: string
  public period?: string
  public basic_salary?: number
  public allowance?: number
  public overtime?: number
  public incentive_bonus?: number
  public others_income?: number
  public pph21?: number
  public bpjs?: number
  public debt_deduction?: number
  public others_deduction?: number

  constructor(req: Request) {
    super(req)

    const query = req.query as unknown as PayrollQueryFilterDto

    const employee_idValue = query.employee_id as unknown
    this.employee_id = typeof employee_idValue === 'string' ? employee_idValue : undefined

    const periodValue = query.period as unknown
    this.period = typeof periodValue === 'string' ? periodValue : undefined

    const basic_salaryValue = query.basic_salary as unknown
    this.basic_salary = this.parseNumber(basic_salaryValue)

    const allowanceValue = query.allowance as unknown
    this.allowance = this.parseNumber(allowanceValue)

    const overtimeValue = query.overtime as unknown
    this.overtime = this.parseNumber(overtimeValue)

    const incentive_bonusValue = query.incentive_bonus as unknown
    this.incentive_bonus = this.parseNumber(incentive_bonusValue)

    const others_incomeValue = query.others_income as unknown
    this.others_income = this.parseNumber(others_incomeValue)

    const pph21Value = query.pph21 as unknown
    this.pph21 = this.parseNumber(pph21Value)

    const bpjsValue = query.bpjs as unknown
    this.bpjs = this.parseNumber(bpjsValue)

    const debt_deductionValue = query.debt_deduction as unknown
    this.debt_deduction = this.parseNumber(debt_deductionValue)

    const others_deductionValue = query.others_deduction as unknown
    this.others_deduction = this.parseNumber(others_deductionValue)
  }

  private parseNumber(value: unknown): number | undefined {
    if (value === undefined || value === null || value === '') return undefined

    const parsed = Number(value)
    return Number.isNaN(parsed) ? undefined : parsed
  }

  public queryFilter(): FindOptions {
    const whereCondition: WhereOptions<PayrollQueryFilterDto>[] = []

    if (this.employee_id !== undefined && this.employee_id !== null && this.employee_id !== '') {
      whereCondition.push({ employee_id: this.employee_id })
    }

    if (this.period !== undefined && this.period !== null && this.period !== '') {
      whereCondition.push({ period: { [Op.like]: `%${this.period}%` } })
    }

    if (this.basic_salary !== undefined && this.basic_salary !== null) {
      whereCondition.push({ basic_salary: this.basic_salary })
    }

    if (this.allowance !== undefined && this.allowance !== null) {
      whereCondition.push({ allowance: this.allowance })
    }

    if (this.overtime !== undefined && this.overtime !== null) {
      whereCondition.push({ overtime: this.overtime })
    }

    if (this.incentive_bonus !== undefined && this.incentive_bonus !== null) {
      whereCondition.push({ incentive_bonus: this.incentive_bonus })
    }

    if (this.others_income !== undefined && this.others_income !== null) {
      whereCondition.push({ others_income: this.others_income })
    }

    if (this.pph21 !== undefined && this.pph21 !== null) {
      whereCondition.push({ pph21: this.pph21 })
    }

    if (this.bpjs !== undefined && this.bpjs !== null) {
      whereCondition.push({ bpjs: this.bpjs })
    }

    if (this.debt_deduction !== undefined && this.debt_deduction !== null) {
      whereCondition.push({ debt_deduction: this.debt_deduction })
    }

    if (this.others_deduction !== undefined && this.others_deduction !== null) {
      whereCondition.push({ others_deduction: this.others_deduction })
    }

    return {
      where: {
        [Op.and]: whereCondition,
      },
      limit: this.limit,
      offset: this.offset,
      order: this.order,
    }
  }
}
