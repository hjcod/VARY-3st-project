'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_campaign', 'comment', {
      type: Sequelize.JSONB,
      defaultValue: []
    });
    await queryInterface.addColumn('tbl_campaign', 'total_number_user_rating', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('tbl_campaign', 'total_rating', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    return await queryInterface.addColumn('tbl_campaign', 'rating_avg', {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_campaign', 'comment');
    await queryInterface.removeColumn('tbl_campaign', 'total_number_user_rating');
    await queryInterface.removeColumn('tbl_campaign', 'total_rating');
    return await queryInterface.removeColumn('tbl_campaign', 'rating_avg');
  }
};
