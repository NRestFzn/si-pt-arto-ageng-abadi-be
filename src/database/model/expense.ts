import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'expenses' })
export default class Expense extends BaseSchema {
  @Column({ allowNull: true, type: DataTypes.STRING })
  expense_type?: string

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  date?: Date

  @Column({ allowNull: true, type: DataTypes.TEXT })
  description?: string

  @Column({ allowNull: true, type: DataTypes.INTEGER })
  quantity?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  unit_price?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  account?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  payment_method?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  bank_account?: string
}
