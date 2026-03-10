import * as yup from 'yup'
import { NavigationGroups } from '@/database/model/navigation'

const urlRegex = /^\/.*$/

export const createNavigationSchema = yup.object({
  title: yup.string().trim().required('validation.required'),
  url: yup
    .string()
    .trim()
    .matches(urlRegex, 'validation.format')
    .required('validation.required'),
  icon: yup.string().trim().optional(),
  group: yup
    .mixed<(typeof NavigationGroups)[number]>()
    .oneOf([...NavigationGroups])
    .optional(),
})

export const updateNavigationSchema = yup.object({
  title: yup.string().trim().optional(),
  url: yup
    .string()
    .trim()
    .matches(urlRegex, {
      message: 'validation.format',
      excludeEmptyString: true,
    })
    .optional(),
  icon: yup.string().trim().optional(),
  group: yup
    .mixed<(typeof NavigationGroups)[number]>()
    .oneOf([...NavigationGroups])
    .optional(),
})
