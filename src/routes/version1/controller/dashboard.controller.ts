import express, { Request, Response } from 'express'
import asyncHandler from '@/helper/asyncHandler'
import HttpResponse from '@/libs/http/HttpResponse'
import authorization from '@/middleware/authorization'
import { permissionAccess } from '@/middleware/permissionAccess'
import { RoleId } from '@/libs/constant/roleIds'
import { DashboardService } from '@/modules/dashboard/service/dashboardService'
import { dashboardSummaryQuerySchema } from '@/modules/dashboard/schema'

const route = express.Router()
const service = new DashboardService()

route.get(
  '/summary',
  authorization(),
  permissionAccess([RoleId.admin]),
  asyncHandler(async (req: Request, res: Response) => {
    dashboardSummaryQuerySchema.validateSync(req.query)

    const data = await service.getSummary(req)

    const httpResponse = HttpResponse.get({
      message: req.t.success.retrieved,
      data,
    })

    res.status(httpResponse.statusCode).json(httpResponse)
  })
)

export { route as DashboardController }
