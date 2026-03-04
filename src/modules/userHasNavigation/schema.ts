import * as yup from 'yup'

export const createUserHasNavigationSchema = yup.object({
  user_id: yup.string().uuid().required('validation.required'),
  navigation_id: yup.string().uuid().required('validation.required'),
})

export const updateUserHasNavigationSchema = yup.object({
  user_id: yup.string().uuid().optional(),
  navigation_id: yup.string().uuid().optional(),
})
