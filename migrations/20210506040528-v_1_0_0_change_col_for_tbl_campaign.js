"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_campaign", "title", {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_campaign", "title", {
      type: Sequelize.STRING,
    });
  },
};
