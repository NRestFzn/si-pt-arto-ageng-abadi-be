'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('payrolls', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    employee_id: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'employees',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    period: { allowNull: true, type: Sequelize.STRING },
    basic_salary: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    allowance: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    overtime: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    incentive_bonus: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    others_income: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    pph21: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    bpjs: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    debt_deduction: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    others_deduction: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  })
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.dropTable('payrolls')
}
