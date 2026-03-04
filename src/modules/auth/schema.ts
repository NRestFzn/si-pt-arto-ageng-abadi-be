import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup.string().email('validation.email').required('validation.required'),
  password: yup
    .string()
    .min(8, 'validation.min')
    .required('validation.required'),
})

export const registerSchema = yup.object({
  fullname: yup.string().required('validation.required'),
  email: yup.string().email('validation.email').required('validation.required'),
  password: yup
    .string()
    .min(8, 'validation.min')
    .required('validation.required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'validation.same')
    .required('validation.required'),
})
