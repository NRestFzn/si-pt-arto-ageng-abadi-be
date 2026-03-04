import * as yup from 'yup'

export const createInvoiceSchema = yup
  .object({
    customer_id: yup.string().uuid().required('validation.required'),
    invoice_number: yup.string().optional(),
    date: yup.date().optional(),
    po_number: yup.string().optional(),
    po_date: yup.date().optional(),
    period_start: yup.date().optional(),
    period_end: yup.date().optional(),
    total_usage: yup.number().min(0, 'validation.min').optional(),
    deposit_deduction: yup.number().min(0, 'validation.min').optional(),
    total_bill: yup.number().min(0, 'validation.min').optional(),
    note: yup.string().optional(),
  })
  .test('period-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.period_start !== undefined &&
      value.period_end !== undefined &&
      value.period_end < value.period_start
    ) {
      return false
    }

    return true
  })

export const updateInvoiceSchema = yup
  .object({
    customer_id: yup.string().uuid().optional(),
    invoice_number: yup.string().optional(),
    date: yup.date().optional(),
    po_number: yup.string().optional(),
    po_date: yup.date().optional(),
    period_start: yup.date().optional(),
    period_end: yup.date().optional(),
    total_usage: yup.number().min(0, 'validation.min').optional(),
    deposit_deduction: yup.number().min(0, 'validation.min').optional(),
    total_bill: yup.number().min(0, 'validation.min').optional(),
    note: yup.string().optional(),
  })
  .test('period-order', 'validation.range', (value) => {
    if (!value) return true

    if (
      value.period_start !== undefined &&
      value.period_end !== undefined &&
      value.period_end < value.period_start
    ) {
      return false
    }

    return true
  })
