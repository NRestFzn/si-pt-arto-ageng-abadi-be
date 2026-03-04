import * as yup from 'yup'

export const createOfferSchema = yup.object({
  customer_id: yup.string().uuid().required('validation.required'),
  offer_number: yup.string().optional(),
  date: yup.date().optional(),
  implementation: yup.string().optional(),
  monthly_cng_usage_volume: yup.number().min(0, 'validation.min').optional(),
  standard_ghv_specification: yup.string().optional(),
  cng_mother_station_location: yup.string().optional(),
  cng_gas_price_per_sm3: yup.number().min(0, 'validation.min').optional(),
  payment_method: yup.string().optional(),
  price_includes: yup.string().optional(),
  contract_period: yup.string().optional(),
  preparation_time: yup.string().optional(),
  validity: yup.string().optional(),
})

export const updateOfferSchema = yup.object({
  customer_id: yup.string().uuid().optional(),
  offer_number: yup.string().optional(),
  date: yup.date().optional(),
  implementation: yup.string().optional(),
  monthly_cng_usage_volume: yup.number().min(0, 'validation.min').optional(),
  standard_ghv_specification: yup.string().optional(),
  cng_mother_station_location: yup.string().optional(),
  cng_gas_price_per_sm3: yup.number().min(0, 'validation.min').optional(),
  payment_method: yup.string().optional(),
  price_includes: yup.string().optional(),
  contract_period: yup.string().optional(),
  preparation_time: yup.string().optional(),
  validity: yup.string().optional(),
})
