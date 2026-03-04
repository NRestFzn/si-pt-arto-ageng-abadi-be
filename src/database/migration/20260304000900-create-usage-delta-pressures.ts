'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('usage_delta_pressures', {
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
    gtm_type: { allowNull: true, type: Sequelize.STRING },
    lwc: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    vol_nm3_at_200_bar_g: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    pressure_start: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    pressure_finish: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    pressure_difference: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    total_sm3: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    ghv: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    standard_1_sm3: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    mmbtu: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    mmbtu_per_sm3: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
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
  await queryInterface.dropTable('usage_delta_pressures')
}
