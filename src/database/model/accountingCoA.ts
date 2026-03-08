import { BelongsTo, Column, Table, Unique } from 'sequelize-typescript'
import BaseSchema from './_baseModel'
import { DataTypes } from 'sequelize'
import CoACategory from './coaCategory'

@Table({ freezeTableName: true, tableName: 'accounting_coas' })
export default class AccountingCoA extends BaseSchema {
  @Unique
  @Column({ allowNull: false, type: DataTypes.STRING, unique: true })
  code: string

  @Column({ allowNull: false, type: DataTypes.STRING })
  name: string

  @Column({
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
    field: 'initial_balance',
  })
  initialBalance: number

  @Column({ allowNull: false, type: DataTypes.UUID })
  CoACategoryId: string

  @BelongsTo(() => CoACategory, {
    foreignKey: 'CoaCategoryId',
    targetKey: 'id',
  })
  coaCategory!: CoACategory
}
