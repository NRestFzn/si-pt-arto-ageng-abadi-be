import * as yup from 'yup'

export const createRoleHasNavigationSchema = yup.object({
  role_id: yup.string().uuid().required('validation.required'),
  navigation_id: yup.string().uuid().required('validation.required'),
})

export const updateRoleHasNavigationSchema = yup.object({
  role_id: yup.string().uuid().optional(),
  navigation_id: yup.string().uuid().optional(),
})
