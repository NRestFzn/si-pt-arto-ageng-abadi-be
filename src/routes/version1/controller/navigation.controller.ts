import { NavigationService } from '@/modules/navigation/service/navigationService'
import {
  createNavigationSchema,
  updateNavigationSchema,
} from '@/modules/navigation/schema'
import { createCrudController } from './_crud.controller.factory'
import express, { Request, Response } from 'express'
import asyncHandler from '@/helper/asyncHandler'
import HttpResponse from '@/libs/http/HttpResponse'
import authorization from '@/middleware/authorization'

const service = new NavigationService()

const crudRoutes = createCrudController({
  service,
  createSchema: createNavigationSchema,
  updateSchema: updateNavigationSchema,
})

const route = express.Router()

route.get(
  '/',
  authorization(),
  asyncHandler(async (req: Request, res: Response) => {
    const data = await service.getGrouped()

    const httpResponse = HttpResponse.get({
      message: req.t.success.retrieved,
      data,
    })

    res.status(httpResponse.statusCode).json(httpResponse)
  })
)

route.use('/', crudRoutes)

export const NavigationController = route
