import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'navigations' })
export default class Navigation extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string

  @Column({ allowNull: false, type: DataTypes.STRING })
  path: string
}
