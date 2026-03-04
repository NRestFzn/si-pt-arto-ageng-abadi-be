import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'cash_advances' })
export default class CashAdvance extends BaseSchema {
  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  date?: Date

  @Column({ allowNull: true, type: DataTypes.TEXT })
  description?: string

  @Column({ allowNull: false, type: DataTypes.UUID })
  employee_id: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  amount?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  monthly_deduction?: number
}
