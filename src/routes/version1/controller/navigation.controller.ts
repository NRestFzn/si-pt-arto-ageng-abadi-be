import { NavigationService } from '@/modules/navigation/service/navigationService'
import {
  createNavigationSchema,
  updateNavigationSchema,
} from '@/modules/navigation/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new NavigationService()

export const NavigationController = createCrudController({
  service,
  createSchema: createNavigationSchema,
  updateSchema: updateNavigationSchema,
})
