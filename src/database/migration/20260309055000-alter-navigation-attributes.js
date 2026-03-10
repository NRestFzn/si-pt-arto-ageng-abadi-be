'use strict';

const GROUPS = ['Overview', 'Master Data', 'Operasional', 'Keuangan', 'Accounting', 'Pengaturan']

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('navigations', 'name', 'title')
    await queryInterface.renameColumn('navigations', 'path', 'url')
    await queryInterface.addColumn('navigations', 'icon', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'url',
    })
    await queryInterface.addColumn('navigations', 'group', {
      type: Sequelize.ENUM(...GROUPS),
      allowNull: true,
      after: 'icon',
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('navigations', 'group')
    await queryInterface.removeColumn('navigations', 'icon')
    await queryInterface.renameColumn('navigations', 'url', 'path')
    await queryInterface.renameColumn('navigations', 'title', 'name')
  },
};
