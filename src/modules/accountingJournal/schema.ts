import * as yup from 'yup'

const journalEntrySchema = yup.object({
  account_code: yup.string().required('validation.required'),
  debit: yup.number().min(0, 'validation.min').required('validation.required'),
  credit: yup.number().min(0, 'validation.min').required('validation.required'),
})

const upsertJournalEntrySchema = yup.object({
  id: yup.string().uuid().optional(),
  account_code: yup.string().required('validation.required'),
  debit: yup.number().min(0, 'validation.min').required('validation.required'),
  credit: yup.number().min(0, 'validation.min').required('validation.required'),
})

export const createAccountingJournalSchema = yup.object({
  transaction_date: yup.date().required('validation.required'),
  description: yup.string().trim().required('validation.required'),
  source_module: yup.string().trim().required('validation.required'),
  entries: yup
    .array()
    .of(journalEntrySchema)
    .min(1, 'validation.required')
    .required('validation.required'),
})

export const updateAccountingJournalSchema = yup.object({
  transaction_date: yup.date().optional(),
  description: yup.string().trim().optional(),
  source_module: yup.string().trim().optional(),
  entries: yup.array().of(upsertJournalEntrySchema).optional(),
  removed_entry_ids: yup.array().of(yup.string().uuid()).optional(),
})
