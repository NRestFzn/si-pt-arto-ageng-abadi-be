import * as yup from 'yup'

export const createDepositSchema = yup.object({
  customer_id: yup.string().uuid().required('validation.required'),
  date: yup.date().optional(),
  amount: yup.number().min(0, 'validation.min').optional(),
  chart_of_account: yup.string().optional(),
})

export const updateDepositSchema = yup.object({
  customer_id: yup.string().uuid().optional(),
  date: yup.date().optional(),
  amount: yup.number().min(0, 'validation.min').optional(),
  chart_of_account: yup.string().optional(),
})
