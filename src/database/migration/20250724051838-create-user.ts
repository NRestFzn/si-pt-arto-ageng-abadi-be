'use strict'

import { DataTypes, QueryInterface } from 'sequelize'

/** @type {import('sequelize-cli').Migration} */
export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.createTable('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    fullname: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    username: {
      allowNull: true,
      type: Sequelize.STRING,
      unique: true,
    },
    position: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    profile_picture: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    role_id: {
      allowNull: false,
      type: Sequelize.UUID,
      references: {
        model: 'roles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
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
  await queryInterface.dropTable('users')
}
