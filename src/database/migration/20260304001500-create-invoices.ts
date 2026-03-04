'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('invoices', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
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
    invoice_number: { allowNull: true, type: Sequelize.STRING },
    date: { allowNull: true, type: Sequelize.DATEONLY },
    po_number: { allowNull: true, type: Sequelize.STRING },
    po_date: { allowNull: true, type: Sequelize.DATEONLY },
    period_start: { allowNull: true, type: Sequelize.DATEONLY },
    period_end: { allowNull: true, type: Sequelize.DATEONLY },
    total_usage: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    deposit_deduction: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    total_bill: { allowNull: true, type: Sequelize.DECIMAL(18, 4) },
    note: { allowNull: true, type: Sequelize.TEXT },
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
  await queryInterface.dropTable('invoices')
}
