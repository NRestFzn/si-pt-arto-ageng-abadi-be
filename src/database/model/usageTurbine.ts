import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'usage_turbines' })
export default class UsageTurbine extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.DATEONLY })
  date: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  gtm_number?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  turbine_start?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  turbine_finish?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  turbine_difference?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  supply_pressure?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  temp_avg_prs?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  compression_factor?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  temp_base?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_standard?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_atm_standard?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  ghv?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  standard_1_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  mmbtu?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  currency?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  exchange_rate?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  price_per_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_sales?: number
}
