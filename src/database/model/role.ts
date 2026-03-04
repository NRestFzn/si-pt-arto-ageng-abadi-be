import { Column, HasMany, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'
import { DataTypes } from 'sequelize'
import User from './user'

@Table({ freezeTableName: true, tableName: 'roles' })
export default class Role extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.STRING, unique: true })
  name: string

  @HasMany(() => User)
  users?: User[]
}
