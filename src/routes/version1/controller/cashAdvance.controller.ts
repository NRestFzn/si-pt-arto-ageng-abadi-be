import { CashAdvanceService } from '@/modules/cashAdvance/service/cashAdvanceService'
import {
  approveCashAdvanceSchema,
  createCashAdvanceSchema,
  rejectCashAdvanceSchema,
  updateCashAdvanceSchema,
} from '@/modules/cashAdvance/schema'
import { createCrudController } from './_crud.controller.factory'
import authorization from '@/middleware/authorization'
import { permissionAccess } from '@/middleware/permissionAccess'
import { RoleId } from '@/libs/constant/roleIds'
import asyncHandler from '@/helper/asyncHandler'
import { Request, Response } from 'express'
import HttpResponse from '@/libs/http/HttpResponse'

const service = new CashAdvanceService()

export const CashAdvanceController = createCrudController({
  service,
  createSchema: createCashAdvanceSchema,
  updateSchema: updateCashAdvanceSchema,
  extendRoutes: (route, customService) => {
    route.post(
      '/:id/approve',
      authorization(),
      permissionAccess([RoleId.admin]),
      asyncHandler(async (req: Request, res: Response) => {
        const id = String(req.params.id)
        const formData = req.getBody()
        const values = approveCashAdvanceSchema.validateSync(formData)

        const data = await customService.approve(id, values)

        const httpResponse = HttpResponse.updated({
          message: 'cash advance approved',
          data,
        })

        res.status(httpResponse.statusCode).json(httpResponse)
      })
    )

    route.post(
      '/:id/reject',
      authorization(),
      permissionAccess([RoleId.admin]),
      asyncHandler(async (req: Request, res: Response) => {
        const id = String(req.params.id)
        const formData = req.getBody()
        const values = rejectCashAdvanceSchema.validateSync(formData)

        const data = await customService.reject(id, values)

        const httpResponse = HttpResponse.updated({
          message: 'cash advance rejected',
          data,
        })

        res.status(httpResponse.statusCode).json(httpResponse)
      })
    )
  },
})
