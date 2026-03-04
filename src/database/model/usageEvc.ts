import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'usage_evcs' })
export default class UsageEvc extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.DATEONLY })
  date: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  license_plate?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  gtm_number?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  turbine_start?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  turbine_finish?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  turbine_difference?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  evc_start?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  evc_finish?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  evc_difference_sm3?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  currency?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  exchange_rate?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  price_per_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_sales?: number
}
