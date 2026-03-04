'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('usage_evcs', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    date: {
      allowNull: false,
      type: Sequelize.DATEONLY,
    },
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
    license_plate: { allowNull: true, type: Sequelize.STRING },
    gtm_number: { allowNull: true, type: Sequelize.STRING },
    turbine_start: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    turbine_finish: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    turbine_difference: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    evc_start: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    evc_finish: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    evc_difference_sm3: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    currency: { allowNull: true, type: Sequelize.STRING },
    exchange_rate: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    price_per_sm3: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    total_sales: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
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
  await queryInterface.dropTable('usage_evcs')
}
