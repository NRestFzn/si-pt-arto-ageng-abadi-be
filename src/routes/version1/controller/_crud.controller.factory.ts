import express, { Request, Response, Router } from 'express'
import asyncHandler from '@/helper/asyncHandler'
import HttpResponse from '@/libs/http/HttpResponse'
import authorization from '@/middleware/authorization'
import { permissionAccess } from '@/middleware/permissionAccess'
import { RoleId } from '@/libs/constant/roleIds'
import { AnyObjectSchema } from 'yup'

type CrudServiceContract = {
  getAll: (req: Request) => Promise<any>
  getByPk: (id: string) => Promise<any>
  add: (formData: any) => Promise<any>
  update: (id: string, formData: any) => Promise<void>
  delete: (id: string) => Promise<void>
}

export function createCrudController<
  TService extends CrudServiceContract,
>(config: {
  service: TService
  createSchema: AnyObjectSchema
  updateSchema: AnyObjectSchema
  extendRoutes?: (route: Router, service: TService) => void
}) {
  const route = express.Router()

  route.post(
    '/',
    authorization(),
    permissionAccess([RoleId.admin]),
    asyncHandler(async (req: Request, res: Response) => {
      const formData = req.getBody()
      const values = config.createSchema.validateSync(formData)
      const data = await config.service.add(values)

      const httpResponse = HttpResponse.created({
        message: req.t.success.created,
        data,
      })

      res.status(httpResponse.statusCode).json(httpResponse)
    })
  )

  route.get(
    '/',
    authorization(),
    permissionAccess([RoleId.admin]),
    asyncHandler(async (req: Request, res: Response) => {
      const data = await config.service.getAll(req)

      const httpResponse = HttpResponse.get({
        message: req.t.success.retrieved,
        ...data,
      })

      res.status(httpResponse.statusCode).json(httpResponse)
    })
  )

  route.get(
    '/:id',
    authorization(),
    permissionAccess([RoleId.admin]),
    asyncHandler(async (req: Request, res: Response) => {
      const id = String(req.params.id)
      const data = await config.service.getByPk(id)

      const httpResponse = HttpResponse.get({
        message: req.t.success.retrieved,
        data,
      })

      res.status(httpResponse.statusCode).json(httpResponse)
    })
  )

  route.put(
    '/:id',
    authorization(),
    permissionAccess([RoleId.admin]),
    asyncHandler(async (req: Request, res: Response) => {
      const formData = req.getBody()
      const values = config.updateSchema.validateSync(formData)
      const id = String(req.params.id)

      await config.service.update(id, values)

      const httpResponse = HttpResponse.updated({
        message: req.t.success.updated,
      })

      res.status(httpResponse.statusCode).json(httpResponse)
    })
  )

  route.delete(
    '/:id',
    authorization(),
    permissionAccess([RoleId.admin]),
    asyncHandler(async (req: Request, res: Response) => {
      const id = String(req.params.id)
      await config.service.delete(id)

      const httpResponse = HttpResponse.deleted({
        message: req.t.success.deleted,
      })

      res.status(httpResponse.statusCode).json(httpResponse)
    })
  )

  if (config.extendRoutes) {
    config.extendRoutes(route, config.service)
  }

  return route
}
