import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'customers' })
export default class Customer extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.STRING })
  company_name: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  npwp?: string

  @Column({ allowNull: true, type: DataTypes.TEXT })
  address?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  phone_number?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  pic_name?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  pic_phone_number?: string
}
