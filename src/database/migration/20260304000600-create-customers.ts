'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('customers', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    company_name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    npwp: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    address: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    phone_number: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    pic_name: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    pic_phone_number: {
      allowNull: true,
      type: Sequelize.STRING,
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
  await queryInterface.dropTable('customers')
}
