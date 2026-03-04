import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'employees' })
export default class Employee extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  nik?: string
}
