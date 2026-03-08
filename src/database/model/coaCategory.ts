import { Column, HasMany, Table, Unique } from 'sequelize-typescript'
import BaseSchema from './_baseModel'
import { DataTypes } from 'sequelize'

@Table({ freezeTableName: true, tableName: 'coa_categories' })
export default class CoACategory extends BaseSchema {
  @Unique
  @Column({ allowNull: false, type: DataTypes.STRING, unique: true })
  name: string
}
