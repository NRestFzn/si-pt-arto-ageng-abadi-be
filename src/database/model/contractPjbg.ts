import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'contract_pjbgs' })
export default class ContractPjbg extends BaseSchema {
  @Column({ allowNull: true, type: DataTypes.STRING })
  contract_number?: string

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  duration?: string
}
