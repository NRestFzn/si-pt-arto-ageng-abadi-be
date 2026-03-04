'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('contract_key_terms', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    offer_number: { allowNull: true, type: Sequelize.STRING },
    offer_date: { allowNull: true, type: Sequelize.DATEONLY },
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
    volume: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    duration: { allowNull: true, type: Sequelize.STRING },
    price_type: { allowNull: true, type: Sequelize.STRING },
    moq: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    billing_type: { allowNull: true, type: Sequelize.STRING },
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
  await queryInterface.dropTable('contract_key_terms')
}
