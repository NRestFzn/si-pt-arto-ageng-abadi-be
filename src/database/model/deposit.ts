import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'deposits' })
export default class Deposit extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  date?: Date

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  amount?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  chart_of_account?: string
}
