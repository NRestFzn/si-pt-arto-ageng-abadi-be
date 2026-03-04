'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('offers', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    offer_number: { allowNull: true, type: Sequelize.STRING },
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
    implementation: { allowNull: true, type: Sequelize.TEXT },
    monthly_cng_usage_volume: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    standard_ghv_specification: { allowNull: true, type: Sequelize.STRING },
    cng_mother_station_location: { allowNull: true, type: Sequelize.STRING },
    cng_gas_price_per_sm3: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    payment_method: { allowNull: true, type: Sequelize.STRING },
    price_includes: { allowNull: true, type: Sequelize.TEXT },
    contract_period: { allowNull: true, type: Sequelize.STRING },
    preparation_time: { allowNull: true, type: Sequelize.STRING },
    validity: { allowNull: true, type: Sequelize.STRING },
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
  await queryInterface.dropTable('offers')
}
