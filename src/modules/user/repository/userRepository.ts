import Role from '@/database/model/role'
import { db } from '@/database/databaseConnection'
import { ErrorResponse } from '@/libs/http/ErrorResponse'
import User from '@/database/model/user'

export class UserRepository {
  async getByPk(id: string): Promise<User> {
    const data = await User.findByPk(id)

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async update(
    id: string,
    formData: { fullname: string; password?: string }
  ): Promise<User> {
    const data = await this.getByPk(id)

    await db.sequelize!.transaction(async (transaction) => {
      await data.update({ ...formData }, { transaction })
    })

    return data
  }

  async getById(id: string): Promise<User> {
    const data = await User.findOne({
      where: { id },
      include: [{ model: Role }],
    })

    if (!data) throw new ErrorResponse.NotFound('errors.notFound')

    return data
  }

  async updateProfilePict(id: string, profilePicture: string): Promise<User> {
    const data = await this.getByPk(id)

    await db.sequelize!.transaction(async (transaction) => {
      await data.update({ profilePicture }, { transaction })
    })

    return data
  }
}
