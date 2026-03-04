import * as yup from 'yup'

export const createPayrollSchema = yup.object({
  employee_id: yup.string().uuid().required('validation.required'),
  period: yup.string().optional(),
  basic_salary: yup.number().min(0, 'validation.min').optional(),
  allowance: yup.number().min(0, 'validation.min').optional(),
  overtime: yup.number().min(0, 'validation.min').optional(),
  incentive_bonus: yup.number().min(0, 'validation.min').optional(),
  others_income: yup.number().min(0, 'validation.min').optional(),
  pph21: yup.number().min(0, 'validation.min').optional(),
  bpjs: yup.number().min(0, 'validation.min').optional(),
  debt_deduction: yup.number().min(0, 'validation.min').optional(),
  others_deduction: yup.number().min(0, 'validation.min').optional(),
})

export const updatePayrollSchema = yup.object({
  employee_id: yup.string().uuid().optional(),
  period: yup.string().optional(),
  basic_salary: yup.number().min(0, 'validation.min').optional(),
  allowance: yup.number().min(0, 'validation.min').optional(),
  overtime: yup.number().min(0, 'validation.min').optional(),
  incentive_bonus: yup.number().min(0, 'validation.min').optional(),
  others_income: yup.number().min(0, 'validation.min').optional(),
  pph21: yup.number().min(0, 'validation.min').optional(),
  bpjs: yup.number().min(0, 'validation.min').optional(),
  debt_deduction: yup.number().min(0, 'validation.min').optional(),
  others_deduction: yup.number().min(0, 'validation.min').optional(),
})
