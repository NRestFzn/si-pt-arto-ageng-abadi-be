import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import JwtToken from '@/libs/jwtToken'
import { env } from '@/config/env.config'
import { AuthResponseDto, LoginDto, RegisterDto } from '../dto'
import { RoleId } from '@/libs/constant/roleIds'
import { AuthRepository } from '../repository/authRepository'

const jwt = new JwtToken({ secret: env.JWT_SECRET, expires: env.JWT_EXPIRES })

export class AuthService {
  constructor(private readonly repository = new AuthRepository()) {}

  private toAuthResponse(payload: {
    uid: string
    fullname: string
    email: string
    RoleId: string
  }): AuthResponseDto {
    const tokenPayload = JSON.parse(
      JSON.stringify({
        uid: payload.uid,
        RoleId: payload.RoleId,
      })
    )

    const { token, expiresIn } = jwt.generate(tokenPayload)

    return {
      fullname: payload.fullname,
      email: payload.email,
      RoleId: payload.RoleId,
      uid: payload.uid,
      accessToken: token,
      expiresAt: new Date(Date.now() + expiresIn * 1000),
      expiresIn,
    }
  }

  async login(formData: LoginDto): Promise<AuthResponseDto> {
    const user = await this.repository.findUserByEmail(formData.email, {
      withPassword: true,
    })

    if (!user) {
      throw new ErrorResponse.NotFound('auth.loginFailed')
    }

    const isPasswordMatch = await user.comparePassword(formData.password)

    if (!isPasswordMatch) {
      throw new ErrorResponse.BadRequest('auth.loginFailed')
    }

    return this.toAuthResponse({
      uid: user.id,
      fullname: user.fullname,
      email: user.email,
      RoleId: user.RoleId,
    })
  }

  async register(formData: RegisterDto): Promise<AuthResponseDto> {
    let createdUserId = ''

    await db.sequelize!.transaction(async (transaction) => {
      const duplicateEmail = await this.repository.findUserByEmail(
        formData.email,
        {
          transaction,
        }
      )

      if (duplicateEmail) {
        throw new ErrorResponse.BaseResponse('auth.emailUsed', 'Conflict', 409)
      }

      const user = await this.repository.createUser(
        {
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
          RoleId: RoleId.user,
        },
        transaction
      )

      createdUserId = user.id
    })

    const createdUser = await this.repository.findUserByEmail(formData.email)

    if (!createdUser || createdUser.id !== createdUserId) {
      throw new ErrorResponse.BadRequest('auth.loginFailed')
    }

    return this.toAuthResponse({
      uid: createdUser.id,
      fullname: createdUser.fullname,
      email: createdUser.email,
      RoleId: createdUser.RoleId,
    })
  }
}
