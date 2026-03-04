import asyncHandler from '@/helper/asyncHandler'
import express, { Response, Request } from 'express'
import { AuthService } from '@/modules/auth/service/authService'
import HttpResponse from '@/libs/http/HttpResponse'
import { loginSchema, registerSchema } from '@/modules/auth/schema'

const service = new AuthService()

const route = express.Router()

route.post(
  '/signup',
  asyncHandler(async (req: Request, res: Response) => {
    const formData = req.getBody()

    const values = registerSchema.validateSync(formData)

    const data = await service.register({ ...values })

    const httpResponse = HttpResponse.created({
      message: req.t.auth.registerSuccess,
      data,
    })

    res.status(201).json(httpResponse)
  })
)

route.post(
  '/signin',
  asyncHandler(async (req: Request, res: Response) => {
    const formData = req.getBody()

    const values = loginSchema.validateSync(formData)

    const data = await service.login(values)

    const httpResponse = HttpResponse.get({
      message: req.t.auth.loginSuccess,
      data,
    })

    res.status(200).json(httpResponse)
  })
)

export { route as AuthController }
