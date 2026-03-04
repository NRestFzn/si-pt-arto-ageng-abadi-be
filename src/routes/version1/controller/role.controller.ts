import { RoleService } from '@/modules/role/service/roleService'
import { permissionAccess } from '@/middleware/permissionAccess'
import authorization from '@/middleware/authorization'
import express, { Response, Request } from 'express'
import HttpResponse from '@/libs/http/HttpResponse'
import { roleSchema } from '@/modules/role/schema'
import asyncHandler from '@/helper/asyncHandler'
import { RoleId } from '@/libs/constant/roleIds'
import _ from 'lodash'

const service = new RoleService()

const route = express.Router()

route.post(
  '/',
  authorization(),
  permissionAccess([RoleId.admin]),
  asyncHandler(async (req: Request, res: Response) => {
    const formData = req.getBody()

    const values = roleSchema.validateSync(formData)

    const data = await service.add(values)

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
    const data = await service.getAll(req)

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

    const data = await service.getByPk(id)

    const httpResponse = HttpResponse.get({
      message: req.t.success.retrieved,
      data,
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

    const data = await service.delete(id)

    const httpResponse = HttpResponse.deleted({
      message: req.t.success.deleted,
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

    const values = roleSchema.validateSync(formData)

    const id = String(req.params.id)

    const data = await service.update(id, values)

    const httpResponse = HttpResponse.updated({
      message: req.t.success.updated,
      data,
    })

    res.status(httpResponse.statusCode).json(httpResponse)
  })
)

export { route as RoleController }
