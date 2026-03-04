import express, { Router } from 'express'
import { RoleController } from './controller/role.controller'
import { AuthController } from './controller/auth.controller'
import { UserController } from './controller/user.controller'

const Route: Router = express.Router()

Route.use('/role', RoleController)
Route.use('/auth', AuthController)
Route.use('/user', UserController)

export { Route as v1Route }
