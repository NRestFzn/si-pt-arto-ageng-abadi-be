import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

export const NavigationGroups = [
  'Overview',
  'Master Data',
  'Operasional',
  'Keuangan',
  'Accounting',
  'Pengaturan',
] as const

export type NavigationGroup = (typeof NavigationGroups)[number]

@Table({ freezeTableName: true, tableName: 'navigations' })
export default class Navigation extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.STRING })
  title: string

  @Column({ allowNull: false, type: DataTypes.STRING })
  url: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  icon: string

  @Column({ allowNull: true, type: DataTypes.ENUM(...NavigationGroups) })
  group: NavigationGroup
}
