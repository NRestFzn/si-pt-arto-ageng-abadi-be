import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'petty_cashes' })
export default class PettyCash extends BaseSchema {
  @Column({ allowNull: true, type: DataTypes.STRING })
  expense_type?: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  date?: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.TEXT })
  description?: string

  @Column({ allowNull: true, type: DataTypes.INTEGER })
  quantity?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  unit_price?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  transaction_type?: string
}
