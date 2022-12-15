'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_blueprint_category', 'order', {
      type: Sequelize.INTEGER,
      defaultValue: 9999999
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_blueprint_category', 'order');
  }
};
