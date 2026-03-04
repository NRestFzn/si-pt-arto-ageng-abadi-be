import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'purchases' })
export default class Purchase extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.DATEONLY })
  date: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  supplier_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  license_plate?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  gtm_type?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  do_number?: string

  @Column({ allowNull: false, type: DataTypes.UUID })
  driver_id: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  ghc?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_start?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pressure_finish?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  meter_start?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  meter_finish?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  metering_fill_post?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  volume_mmscf?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  volume_mmbtu?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  currency?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  exchange_rate?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  price_per_sm3?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  total_sales?: number
}
