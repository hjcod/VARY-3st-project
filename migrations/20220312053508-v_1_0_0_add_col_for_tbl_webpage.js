'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_webpage', 'total_number_user_rating', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('tbl_webpage', 'total_rating', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    return await queryInterface.addColumn('tbl_webpage', 'rating_avg', {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_webpage', 'is_auto_campaign_template');
    await queryInterface.removeColumn('tbl_webpage', 'total_rating');
    return await queryInterface.removeColumn('tbl_webpage', 'rating_avg');
  }
};
