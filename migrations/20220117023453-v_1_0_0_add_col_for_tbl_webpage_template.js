'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_webpage_template', 'order', {
      type: Sequelize.INTEGER,
      defaultValue: 9999999
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_webpage_template', 'order');
  }
};
