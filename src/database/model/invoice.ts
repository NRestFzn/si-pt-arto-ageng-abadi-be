import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'invoices' })
export default class Invoice extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  invoice_number?: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  date?: Date

  @Column({ allowNull: true, type: DataTypes.STRING })
  po_number?: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  po_date?: Date

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  period_start?: Date

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  period_end?: Date

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_usage?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  deposit_deduction?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_bill?: number

  @Column({ allowNull: true, type: DataTypes.TEXT })
  note?: string
}
