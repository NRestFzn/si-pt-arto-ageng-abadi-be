import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'offers' })
export default class Offer extends BaseSchema {
  @Column({ allowNull: true, type: DataTypes.STRING })
  offer_number?: string

  @Column({ allowNull: true, type: DataTypes.DATEONLY })
  date?: Date

  @Column({ allowNull: false, type: DataTypes.UUID })
  customer_id: string

  @Column({ allowNull: true, type: DataTypes.TEXT })
  implementation?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  monthly_cng_usage_volume?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  standard_ghv_specification?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  cng_mother_station_location?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  cng_gas_price_per_sm3?: number

  @Column({ allowNull: true, type: DataTypes.STRING })
  payment_method?: string

  @Column({ allowNull: true, type: DataTypes.TEXT })
  price_includes?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  contract_period?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  preparation_time?: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  validity?: string
}
