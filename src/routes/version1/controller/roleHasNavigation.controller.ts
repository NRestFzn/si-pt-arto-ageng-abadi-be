import { RoleHasNavigationService } from '@/modules/roleHasNavigation/service/roleHasNavigationService'
import {
  createRoleHasNavigationSchema,
  updateRoleHasNavigationSchema,
} from '@/modules/roleHasNavigation/schema'
import { createCrudController } from './_crud.controller.factory'

const service = new RoleHasNavigationService()

export const RoleHasNavigationController = createCrudController({
  service,
  createSchema: createRoleHasNavigationSchema,
  updateSchema: updateRoleHasNavigationSchema,
})
