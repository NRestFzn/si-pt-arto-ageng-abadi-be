import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'usage_delta_pressures' })
export default class UsageDeltaPressure extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.DATEONLY })
  date: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  license_plate?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  gtm_type?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  lwc?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  vol_nm3_at_200_bar_g?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_start?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_finish?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_difference?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  ghv?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  standard_1_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  mmbtu?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  mmbtu_per_sm3?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  currency?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  exchange_rate?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  price_per_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_sales?: number
}
