import * as yup from 'yup'

const nikRegex = /^\d{16}$/

export const createEmployeeSchema = yup.object({
  name: yup.string().trim().required('validation.required'),
  nik: yup
    .string()
    .matches(nikRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})

export const updateEmployeeSchema = yup.object({
  name: yup.string().trim().optional(),
  nik: yup
    .string()
    .matches(nikRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})
