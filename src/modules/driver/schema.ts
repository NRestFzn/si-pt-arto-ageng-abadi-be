import * as yup from 'yup'

const phoneRegex = /^\+?[0-9]{8,15}$/
const nikRegex = /^\d{16}$/

export const createDriverSchema = yup.object({
  name: yup.string().trim().required('validation.required'),
  phone_number: yup
    .string()
    .matches(phoneRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  nik: yup
    .string()
    .matches(nikRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})

export const updateDriverSchema = yup.object({
  name: yup.string().trim().optional(),
  phone_number: yup
    .string()
    .matches(phoneRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  nik: yup
    .string()
    .matches(nikRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})
