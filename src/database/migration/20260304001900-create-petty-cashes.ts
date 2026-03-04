'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('petty_cashes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    expense_type: { allowNull: true, type: Sequelize.STRING },
    date: { allowNull: true, type: Sequelize.DATEONLY },
    customer_id: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'customers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    description: { allowNull: true, type: Sequelize.TEXT },
    quantity: { allowNull: true, type: Sequelize.INTEGER },
    unit_price: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    total: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    transaction_type: { allowNull: true, type: Sequelize.STRING },
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
  await queryInterface.dropTable('petty_cashes')
}
