import * as yup from 'yup'

const pathRegex = /^\/.*$/

export const createNavigationSchema = yup.object({
  name: yup.string().trim().required('validation.required'),
  path: yup
    .string()
    .trim()
    .matches(pathRegex, 'validation.format')
    .required('validation.required'),
})

export const updateNavigationSchema = yup.object({
  name: yup.string().trim().optional(),
  path: yup
    .string()
    .trim()
    .matches(pathRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})
