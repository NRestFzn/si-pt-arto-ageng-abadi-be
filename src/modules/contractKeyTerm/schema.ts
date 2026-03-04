import * as yup from 'yup'

export const createContractKeyTermSchema = yup.object({
  customer_id: yup.string().uuid().required('validation.required'),
  offer_number: yup.string().optional(),
  offer_date: yup.date().optional(),
  volume: yup.number().min(0, 'validation.min').optional(),
  duration: yup.string().optional(),
  price_type: yup.string().optional(),
  moq: yup.number().min(0, 'validation.min').optional(),
  billing_type: yup.string().optional(),
})

export const updateContractKeyTermSchema = yup.object({
  customer_id: yup.string().uuid().optional(),
  offer_number: yup.string().optional(),
  offer_date: yup.date().optional(),
  volume: yup.number().min(0, 'validation.min').optional(),
  duration: yup.string().optional(),
  price_type: yup.string().optional(),
  moq: yup.number().min(0, 'validation.min').optional(),
  billing_type: yup.string().optional(),
})
