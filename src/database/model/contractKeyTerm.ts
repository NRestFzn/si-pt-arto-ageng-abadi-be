import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'contract_key_terms' })
export default class ContractKeyTerm extends BaseSchema {
  @Column({ allowNull: true, type: DataTypes.STRING })
  offer_number?: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  offer_date?: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  volume?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  duration?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  price_type?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  moq?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  billing_type?: string
}
