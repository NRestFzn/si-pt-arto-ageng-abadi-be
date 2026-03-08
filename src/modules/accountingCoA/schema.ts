import * as yup from 'yup'

export const createAccountingCoASchema = yup.object({
  code: yup.string().required('validation.required'),
  name: yup.string().required('validation.required'),
  initialBalance: yup
    .number()
    .required('validation.required')
    .min(0, 'validation.min'),
  CoACategoryId: yup.string().required('validation.required'),
})

export const updateAccountingCoASchema = yup.object({
  code: yup.string().required('validation.required'),
  name: yup.string().required('validation.required'),
  initialBalance: yup
    .number()
    .required('validation.required')
    .min(0, 'validation.min'),
  CoACategoryId: yup.string().required('validation.required'),
})
