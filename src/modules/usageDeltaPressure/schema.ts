import * as yup from 'yup'

const licensePlateRegex = /^[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{0,3}$/i

export const createUsageDeltaPressureSchema = yup
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
    gtm_type: yup.string().optional(),
    lwc: yup.number().min(0, 'validation.min').optional(),
    vol_nm3_at_200_bar_g: yup.number().min(0, 'validation.min').optional(),
    pressure_start: yup.number().min(0, 'validation.min').optional(),
    pressure_finish: yup.number().min(0, 'validation.min').optional(),
    pressure_difference: yup.number().min(0, 'validation.min').optional(),
    total_sm3: yup.number().min(0, 'validation.min').optional(),
    ghv: yup.number().min(0, 'validation.min').optional(),
    standard_1_sm3: yup.number().min(0, 'validation.min').optional(),
    mmbtu: yup.number().min(0, 'validation.min').optional(),
    mmbtu_per_sm3: yup.number().min(0, 'validation.min').optional(),
    currency: yup.string().optional(),
    exchange_rate: yup.number().min(0, 'validation.min').optional(),
    price_per_sm3: yup.number().min(0, 'validation.min').optional(),
    total_sales: yup.number().min(0, 'validation.min').optional(),
  })
  .test('pressure-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.pressure_start !== undefined &&
      value.pressure_finish !== undefined &&
      value.pressure_finish < value.pressure_start
    ) {
      return false
    }

    return true
  })

export const updateUsageDeltaPressureSchema = yup
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
    gtm_type: yup.string().optional(),
    lwc: yup.number().min(0, 'validation.min').optional(),
    vol_nm3_at_200_bar_g: yup.number().min(0, 'validation.min').optional(),
    pressure_start: yup.number().min(0, 'validation.min').optional(),
    pressure_finish: yup.number().min(0, 'validation.min').optional(),
    pressure_difference: yup.number().min(0, 'validation.min').optional(),
    total_sm3: yup.number().min(0, 'validation.min').optional(),
    ghv: yup.number().min(0, 'validation.min').optional(),
    standard_1_sm3: yup.number().min(0, 'validation.min').optional(),
    mmbtu: yup.number().min(0, 'validation.min').optional(),
    mmbtu_per_sm3: yup.number().min(0, 'validation.min').optional(),
    currency: yup.string().optional(),
    exchange_rate: yup.number().min(0, 'validation.min').optional(),
    price_per_sm3: yup.number().min(0, 'validation.min').optional(),
    total_sales: yup.number().min(0, 'validation.min').optional(),
  })
  .test('pressure-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.pressure_start !== undefined &&
      value.pressure_finish !== undefined &&
      value.pressure_finish < value.pressure_start
    ) {
      return false
    }

    return true
  })
