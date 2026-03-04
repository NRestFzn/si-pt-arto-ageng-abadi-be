import * as yup from 'yup'

export const createCashAdvanceSchema = yup.object({
  employee_id: yup.string().uuid().required('validation.required'),
  date: yup.date().optional(),
  description: yup.string().optional(),
  amount: yup.number().min(0, 'validation.min').optional(),
  monthly_deduction: yup.number().min(0, 'validation.min').optional(),
})

export const updateCashAdvanceSchema = yup.object({
  employee_id: yup.string().uuid().optional(),
  date: yup.date().optional(),
  description: yup.string().optional(),
  amount: yup.number().min(0, 'validation.min').optional(),
  monthly_deduction: yup.number().min(0, 'validation.min').optional(),
})

export const approveCashAdvanceSchema = yup.object({
  note: yup.string().max(255, 'validation.max').optional(),
})

export const rejectCashAdvanceSchema = yup.object({
  reason: yup
    .string()
    .trim()
    .max(255, 'validation.max')
    .required('validation.required'),
})
