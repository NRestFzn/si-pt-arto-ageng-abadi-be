'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('accounting_coas', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    code: {
      unique: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    initial_balance: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0,
    },
    CoACategoryId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'coa_categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
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
  await queryInterface.dropTable('coa_categories')
}
