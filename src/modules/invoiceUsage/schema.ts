import * as yup from 'yup'

export const createInvoiceUsageSchema = yup.object({
  invoice_id: yup.string().uuid().required('validation.required'),
  usage_type: yup.string().required('validation.required'),
  usage_id: yup.string().uuid().required('validation.required'),
})

export const updateInvoiceUsageSchema = yup.object({
  invoice_id: yup.string().uuid().optional(),
  usage_type: yup.string().optional(),
  usage_id: yup.string().uuid().optional(),
})
