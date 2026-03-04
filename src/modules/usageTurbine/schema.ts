import * as yup from 'yup'

export const createUsageTurbineSchema = yup
  .object({
    date: yup.date().required('validation.required'),
    customer_id: yup.string().uuid().required('validation.required'),
    gtm_number: yup.string().optional(),
    turbine_start: yup.number().min(0, 'validation.min').optional(),
    turbine_finish: yup.number().min(0, 'validation.min').optional(),
    turbine_difference: yup.number().min(0, 'validation.min').optional(),
    supply_pressure: yup.number().min(0, 'validation.min').optional(),
    temp_avg_prs: yup.number().min(0, 'validation.min').optional(),
    compression_factor: yup.number().min(0, 'validation.min').optional(),
    temp_base: yup.number().min(0, 'validation.min').optional(),
    pressure_standard: yup.number().min(0, 'validation.min').optional(),
    pressure_atm_standard: yup.number().min(0, 'validation.min').optional(),
    total_sm3: yup.number().min(0, 'validation.min').optional(),
    ghv: yup.number().min(0, 'validation.min').optional(),
    standard_1_sm3: yup.number().min(0, 'validation.min').optional(),
    mmbtu: yup.number().min(0, 'validation.min').optional(),
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

export const updateUsageTurbineSchema = yup
  .object({
    date: yup.date().optional(),
    customer_id: yup.string().uuid().optional(),
    gtm_number: yup.string().optional(),
    turbine_start: yup.number().min(0, 'validation.min').optional(),
    turbine_finish: yup.number().min(0, 'validation.min').optional(),
    turbine_difference: yup.number().min(0, 'validation.min').optional(),
    supply_pressure: yup.number().min(0, 'validation.min').optional(),
    temp_avg_prs: yup.number().min(0, 'validation.min').optional(),
    compression_factor: yup.number().min(0, 'validation.min').optional(),
    temp_base: yup.number().min(0, 'validation.min').optional(),
    pressure_standard: yup.number().min(0, 'validation.min').optional(),
    pressure_atm_standard: yup.number().min(0, 'validation.min').optional(),
    total_sm3: yup.number().min(0, 'validation.min').optional(),
    ghv: yup.number().min(0, 'validation.min').optional(),
    standard_1_sm3: yup.number().min(0, 'validation.min').optional(),
    mmbtu: yup.number().min(0, 'validation.min').optional(),
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
