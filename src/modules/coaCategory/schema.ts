import * as yup from 'yup'

export const coaCategorySchema = yup.object({
  name: yup.string().required('validation.required'),
})
