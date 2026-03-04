import * as yup from 'yup'

const npwpRegex = /^(\d{15}|\d{2}\.\d{3}\.\d{3}\.\d-\d{3}\.\d{3})$/
const phoneRegex = /^\+?[0-9]{8,15}$/

export const createCustomerSchema = yup.object({
  company_name: yup.string().trim().required('validation.required'),
  npwp: yup
    .string()
    .matches(npwpRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  address: yup.string().optional(),
  phone_number: yup
    .string()
    .matches(phoneRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  pic_name: yup.string().optional(),
  pic_phone_number: yup
    .string()
    .matches(phoneRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})

export const updateCustomerSchema = yup.object({
  company_name: yup.string().trim().optional(),
  npwp: yup
    .string()
    .matches(npwpRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  address: yup.string().optional(),
  phone_number: yup
    .string()
    .matches(phoneRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  pic_name: yup.string().optional(),
  pic_phone_number: yup
    .string()
    .matches(phoneRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
})
