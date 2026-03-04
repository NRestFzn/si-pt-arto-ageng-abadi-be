import { UserHasNavigationService } from '@/modules/userHasNavigation/service/userHasNavigationService'
import {
  createUserHasNavigationSchema,
  updateUserHasNavigationSchema,
} from '@/modules/userHasNavigation/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new UserHasNavigationService()

export const UserHasNavigationController = createCrudController({
  service,
  createSchema: createUserHasNavigationSchema,
  updateSchema: updateUserHasNavigationSchema,
})
