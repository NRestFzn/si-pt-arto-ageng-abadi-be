'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('accounting_journal_entries', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    accounting_journal_id: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'accounting_journals',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    account_code: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    debit: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0,
    },
    credit: {
      allowNull: false,
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0,
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
  await queryInterface.dropTable('accounting_journal_entries')
}
