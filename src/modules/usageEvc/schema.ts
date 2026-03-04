import * as yup from 'yup'

const licensePlateRegex = /^[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{0,3}$/i

export const createUsageEvcSchema = yup
  .object({
    date: yup.date().required('validation.required'),
    customer_id: yup.string().uuid().required('validation.required'),
    license_plate: yup
      .string()
      .matches(licensePlateRegex, {
        message: 'validation.format',
        excludeEmptyString: true,
      })
      .optional(),
    gtm_number: yup.string().optional(),
    turbine_start: yup.number().min(0, 'validation.min').optional(),
    turbine_finish: yup.number().min(0, 'validation.min').optional(),
    turbine_difference: yup.number().min(0, 'validation.min').optional(),
    evc_start: yup.number().min(0, 'validation.min').optional(),
    evc_finish: yup.number().min(0, 'validation.min').optional(),
    evc_difference_sm3: yup.number().min(0, 'validation.min').optional(),
    currency: yup.string().optional(),
    exchange_rate: yup.number().min(0, 'validation.min').optional(),
    price_per_sm3: yup.number().min(0, 'validation.min').optional(),
    total_sales: yup.number().min(0, 'validation.min').optional(),
  })
  .test('turbine-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.turbine_start !== undefined &&
      value.turbine_finish !== undefined &&
      value.turbine_finish < value.turbine_start
    ) {
      return false
    }

    return true
  })
  .test('evc-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.evc_start !== undefined &&
      value.evc_finish !== undefined &&
      value.evc_finish < value.evc_start
    ) {
      return false
    }

    return true
  })

export const updateUsageEvcSchema = yup
  .object({
    date: yup.date().optional(),
    customer_id: yup.string().uuid().optional(),
    license_plate: yup
      .string()
      .matches(licensePlateRegex, {
        message: 'validation.format',
        excludeEmptyString: true,
      })
      .optional(),
    gtm_number: yup.string().optional(),
    turbine_start: yup.number().min(0, 'validation.min').optional(),
    turbine_finish: yup.number().min(0, 'validation.min').optional(),
    turbine_difference: yup.number().min(0, 'validation.min').optional(),
    evc_start: yup.number().min(0, 'validation.min').optional(),
    evc_finish: yup.number().min(0, 'validation.min').optional(),
    evc_difference_sm3: yup.number().min(0, 'validation.min').optional(),
    currency: yup.string().optional(),
    exchange_rate: yup.number().min(0, 'validation.min').optional(),
    price_per_sm3: yup.number().min(0, 'validation.min').optional(),
    total_sales: yup.number().min(0, 'validation.min').optional(),
  })
  .test('turbine-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.turbine_start !== undefined &&
      value.turbine_finish !== undefined &&
      value.turbine_finish < value.turbine_start
    ) {
      return false
    }

    return true
  })
  .test('evc-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.evc_start !== undefined &&
      value.evc_finish !== undefined &&
      value.evc_finish < value.evc_start
    ) {
      return false
    }

    return true
  })
