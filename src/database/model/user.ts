import {
  BelongsTo,
  BeforeCreate,
  BeforeUpdate,
  Column,
  DefaultScope,
  ForeignKey,
  Scopes,
  Table,
  Unique,
} from 'sequelize-typescript'
import Hashing from '@/config/hash.config'
import BaseSchema from './_baseModel'
import Role from './role'
import { DataTypes } from 'sequelize'

const hashing = new Hashing()

@DefaultScope(() => ({
  attributes: {
    exclude: ['password'],
  },
}))
@Scopes(() => ({
  withPassword: {
    attributes: {
      include: ['password'],
    },
  },
}))
@Table({ freezeTableName: true, tableName: 'users' })
export default class User extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.STRING })
  fullname: string

  @Unique
  @Column({ allowNull: false, type: DataTypes.STRING })
  email: string

  @Unique
  @Column({ allowNull: true, type: DataTypes.STRING })
  username?: string

  @Column({ type: DataTypes.STRING })
  password: string

  @Column({ type: DataTypes.STRING, allowNull: true })
  position?: string

  @Column({ type: DataTypes.STRING, allowNull: true, field: 'profile_picture' })
  profilePicture?: string

  @ForeignKey(() => Role)
  @Column({ allowNull: false, type: DataTypes.UUID, field: 'role_id' })
  RoleId: string

  @BelongsTo(() => Role)
  role!: Role

  comparePassword: (current_password: string) => Promise<boolean>

  @BeforeUpdate
  @BeforeCreate
  static async setUserPassword(instance: User): Promise<void> {
    if (instance.password) {
      const hash = await hashing.hash(instance.password)

      instance.setDataValue('password', hash)
    }
  }
}

// compare password
User.prototype.comparePassword = async function (
  current_password: string
): Promise<boolean> {
  const password = String(this.password)

  const compare = await hashing.verify(password, current_password)
  return compare
}
