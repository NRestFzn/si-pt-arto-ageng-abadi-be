import User from '@/database/model/user'
import { UpdateUserDto } from '../dto'
import { UserRepository } from '../repository/userRepository'

export class UserService {
  constructor(private readonly repository = new UserRepository()) {}

  async getById(id: string): Promise<User> {
    return this.repository.getById(id)
  }

  async update(id: string, formData: UpdateUserDto): Promise<User> {
    const payload: { fullname: string; password?: string } = {
      fullname: formData.fullname,
    }

    if (formData.newPassword) {
      payload.password = formData.newPassword
    }

    return this.repository.update(id, payload)
  }

  async updateProfilePict(id: string, profilePicture: string): Promise<User> {
    return this.repository.updateProfilePict(id, profilePicture)
  }
}
