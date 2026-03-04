import * as yup from 'yup'

export const createContractPjbgSchema = yup.object({
  customer_id: yup.string().uuid().required('validation.required'),
  contract_number: yup.string().optional(),
  duration: yup.string().optional(),
})

export const updateContractPjbgSchema = yup.object({
  customer_id: yup.string().uuid().optional(),
  contract_number: yup.string().optional(),
  duration: yup.string().optional(),
})
