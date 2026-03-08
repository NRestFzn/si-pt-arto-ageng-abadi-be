import * as yup from 'yup'

const numberFromQuery = yup
  .number()
  .transform((value, originalValue) => {
    if (originalValue === undefined || originalValue === '') {
      return undefined
    }

    const parsed = Number(originalValue)
    return Number.isNaN(parsed) ? value : parsed
  })

export const incomeStatementQuerySchema = yup.object({
  month: numberFromQuery.integer().min(1, 'validation.min').max(12, 'validation.max').optional(),
  year: numberFromQuery.integer().min(1900, 'validation.min').max(9999, 'validation.max').optional(),
})
