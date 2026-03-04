'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('cash_advances', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    date: { allowNull: true, type: Sequelize.DATEONLY },
    description: { allowNull: true, type: Sequelize.TEXT },
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
    amount: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    monthly_deduction: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
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
  await queryInterface.dropTable('cash_advances')
}
