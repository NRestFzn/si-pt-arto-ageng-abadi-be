'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('purchases', {
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
    supplier_id: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'suppliers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    license_plate: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    gtm_type: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    do_number: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    driver_id: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'drivers',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    ghc: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    pressure_start: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    pressure_finish: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    meter_start: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    meter_finish: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    metering_fill_post: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    volume_mmscf: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    volume_mmbtu: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    currency: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    exchange_rate: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    price_per_sm3: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
    },
    total_sales: {
      allowNull: true,
      type: Sequelize.DECIMAL(18, 4),
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
  await queryInterface.dropTable('purchases')
}
