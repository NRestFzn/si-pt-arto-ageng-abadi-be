import { Transaction } from 'sequelize'
import User from '@/database/model/user'
import Role from '@/database/model/role'

export class AuthRepository {
  async findUserByEmail(
    email: string,
    options?: { withPassword?: boolean; transaction?: Transaction }
  ): Promise<User | null> {
    const userScope = options?.withPassword ? User.scope('withPassword') : User

    return userScope.findOne({
      where: { email },
      include: [{ model: Role }],
      transaction: options?.transaction,
    })
  }

  async createUser(
    payload: {
      fullname: string
      email: string
      password: string
      RoleId: string
    },
    transaction?: Transaction
  ): Promise<User> {
    return User.create(payload, { transaction })
  }
}
