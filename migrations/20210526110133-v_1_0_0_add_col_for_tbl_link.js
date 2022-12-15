'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_link', 'parent_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_link',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_link', 'parent_id');

  }
};
