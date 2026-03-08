import express, { Request, Response } from 'express'
import asyncHandler from '@/helper/asyncHandler'
import HttpResponse from '@/libs/http/HttpResponse'
import authorization from '@/middleware/authorization'
import { permissionAccess } from '@/middleware/permissionAccess'
import { RoleId } from '@/libs/constant/roleIds'
import { AccountingService } from '@/modules/accounting/service/accountingService'
import { incomeStatementQuerySchema } from '@/modules/accounting/schema'

const route = express.Router()
const service = new AccountingService()

route.get(
  '/reports/income-statement',
  authorization(),
  permissionAccess([RoleId.admin]),
  asyncHandler(async (req: Request, res: Response) => {
    incomeStatementQuerySchema.validateSync(req.query)

    const data = await service.getIncomeStatement(req)

    const httpResponse = HttpResponse.get({
      message: req.t.success.retrieved,
      data,
    })

    res.status(httpResponse.statusCode).json(httpResponse)
  })
)

export { route as AccountingController }
