'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_user', 'invalid_token_list', {
      type: Sequelize.ARRAY({ type: Sequelize.TEXT }),
      defaultValue: [],
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_user', 'invalid_token_list');
  }
};