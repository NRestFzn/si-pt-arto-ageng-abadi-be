import * as yup from 'yup'

export const createPettyCashSchema = yup.object({
  customer_id: yup.string().uuid().required('validation.required'),
  expense_type: yup.string().optional(),
  date: yup.date().optional(),
  description: yup.string().optional(),
  quantity: yup.number().integer().min(0, 'validation.min').optional(),
  unit_price: yup.number().min(0, 'validation.min').optional(),
  total: yup.number().min(0, 'validation.min').optional(),
  transaction_type: yup.string().optional(),
})

export const updatePettyCashSchema = yup.object({
  customer_id: yup.string().uuid().optional(),
  expense_type: yup.string().optional(),
  date: yup.date().optional(),
  description: yup.string().optional(),
  quantity: yup.number().integer().min(0, 'validation.min').optional(),
  unit_price: yup.number().min(0, 'validation.min').optional(),
  total: yup.number().min(0, 'validation.min').optional(),
  transaction_type: yup.string().optional(),
})
