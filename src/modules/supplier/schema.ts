import * as yup from 'yup'

const phoneRegex = /^\+?[0-9]{8,15}$/

export const createSupplierSchema = yup.object({
  company_name: yup.string().trim().required('validation.required'),
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

export const updateSupplierSchema = yup.object({
  company_name: yup.string().trim().optional(),
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
