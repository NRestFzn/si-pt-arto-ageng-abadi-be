import * as yup from 'yup'

export const createExpenseSchema = yup.object({
  customer_id: yup.string().uuid().required('validation.required'),
  expense_type: yup.string().optional(),
  date: yup.date().optional(),
  description: yup.string().optional(),
  quantity: yup.number().integer().min(0, 'validation.min').optional(),
  unit_price: yup.number().min(0, 'validation.min').optional(),
  total: yup.number().min(0, 'validation.min').optional(),
  account: yup.string().optional(),
  payment_method: yup.string().optional(),
  bank_account: yup.string().optional(),
})

export const updateExpenseSchema = yup.object({
  customer_id: yup.string().uuid().optional(),
  expense_type: yup.string().optional(),
  date: yup.date().optional(),
  description: yup.string().optional(),
  quantity: yup.number().integer().min(0, 'validation.min').optional(),
  unit_price: yup.number().min(0, 'validation.min').optional(),
  total: yup.number().min(0, 'validation.min').optional(),
  account: yup.string().optional(),
  payment_method: yup.string().optional(),
  bank_account: yup.string().optional(),
})
