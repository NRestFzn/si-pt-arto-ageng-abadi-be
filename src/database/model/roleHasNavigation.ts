import { DataTypes } from 'sequelize'
import {
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'

@Table({ freezeTableName: true, tableName: 'role_has_navigations' })
export default class RoleHasNavigation extends Model {
  @PrimaryKey
  @Column({ allowNull: false, type: DataTypes.UUID })
  role_id: string

  @PrimaryKey
  @Column({ allowNull: false, type: DataTypes.UUID })
  navigation_id: string

  @CreatedAt
  @Column({ allowNull: false, type: DataTypes.DATE, field: 'created_at' })
  createdAt!: Date

  @UpdatedAt
  @Column({ allowNull: false, type: DataTypes.DATE, field: 'updated_at' })
  updatedAt!: Date
}
