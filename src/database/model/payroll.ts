import { DataTypes } from 'sequelize'
import { Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'

@Table({ freezeTableName: true, tableName: 'payrolls' })
export default class Payroll extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.UUID })
  employee_id: string

  @Column({ allowNull: true, type: DataTypes.STRING })
  period?: string

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  basic_salary?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  allowance?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  overtime?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  incentive_bonus?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  others_income?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  pph21?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  bpjs?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  debt_deduction?: number

  @Column({ allowNull: true, type: DataTypes.DECIMAL(18, 4) })
  others_deduction?: number
}
