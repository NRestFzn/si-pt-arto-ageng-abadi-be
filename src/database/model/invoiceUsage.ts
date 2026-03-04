import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'invoice_usages' })
export default class InvoiceUsage extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.UUID })
  invoice_id: string

  @Column({ allowNull: false, type: DataTypes.STRING })
  usage_type: string

  @Column({ allowNull: false, type: DataTypes.UUID })
  usage_id: string
}
