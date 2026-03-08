export interface PayrollDto {
  id: string
  employee_id: string
  period?: string
  basic_salary?: number
  allowance?: number
  overtime?: number
  incentive_bonus?: number
  others_income?: number
  pph21?: number
  bpjs?: number
  debt_deduction?: number
  others_deduction?: number
  createdAt: Date
  updatedAt: Date
}

export interface CreatePayrollDto {
  employee_id: string
  period?: string
  basic_salary?: number
  allowance?: number
  overtime?: number
  incentive_bonus?: number
  others_income?: number
  pph21?: number
  bpjs?: number
  debt_deduction?: number
  others_deduction?: number
}

export type UpdatePayrollDto = Partial<CreatePayrollDto>


export interface PayrollQueryFilterDto extends Partial<CreatePayrollDto> {}
