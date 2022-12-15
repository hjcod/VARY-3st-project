'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_campaign', 'sg_message_id', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      defaultValue: [],
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_campaign', 'sg_message_id');
  }
};
