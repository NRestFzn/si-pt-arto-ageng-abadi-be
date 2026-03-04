import * as yup from 'yup'

const licensePlateRegex = /^[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{0,3}$/i

export const createPurchaseSchema = yup
  .object({
    date: yup.date().required('validation.required'),
    supplier_id: yup.string().uuid().required('validation.required'),
    driver_id: yup.string().uuid().required('validation.required'),
    license_plate: yup
      .string()
      .matches(licensePlateRegex, {
        message: 'validation.format',
        excludeEmptyString: true,
      })
      .optional(),
    gtm_type: yup.string().optional(),
    do_number: yup.string().optional(),
    ghc: yup.number().min(0, 'validation.min').optional(),
    pressure_start: yup.number().min(0, 'validation.min').optional(),
    pressure_finish: yup.number().min(0, 'validation.min').optional(),
    meter_start: yup.number().min(0, 'validation.min').optional(),
    meter_finish: yup.number().min(0, 'validation.min').optional(),
    metering_fill_post: yup.number().min(0, 'validation.min').optional(),
    volume_mmscf: yup.number().min(0, 'validation.min').optional(),
    volume_mmbtu: yup.number().min(0, 'validation.min').optional(),
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
  .test('meter-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.meter_start !== undefined &&
      value.meter_finish !== undefined &&
      value.meter_finish < value.meter_start
    ) {
      return false
    }

    return true
  })

export const updatePurchaseSchema = yup
  .object({
    date: yup.date().optional(),
    supplier_id: yup.string().uuid().optional(),
    driver_id: yup.string().uuid().optional(),
    license_plate: yup
      .string()
      .matches(licensePlateRegex, {
        message: 'validation.format',
        excludeEmptyString: true,
      })
      .optional(),
    gtm_type: yup.string().optional(),
    do_number: yup.string().optional(),
    ghc: yup.number().min(0, 'validation.min').optional(),
    pressure_start: yup.number().min(0, 'validation.min').optional(),
    pressure_finish: yup.number().min(0, 'validation.min').optional(),
    meter_start: yup.number().min(0, 'validation.min').optional(),
    meter_finish: yup.number().min(0, 'validation.min').optional(),
    metering_fill_post: yup.number().min(0, 'validation.min').optional(),
    volume_mmscf: yup.number().min(0, 'validation.min').optional(),
    volume_mmbtu: yup.number().min(0, 'validation.min').optional(),
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
  .test('meter-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.meter_start !== undefined &&
      value.meter_finish !== undefined &&
      value.meter_finish < value.meter_start
    ) {
      return false
    }

    return true
  })
