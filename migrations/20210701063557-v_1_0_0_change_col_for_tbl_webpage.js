"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_webpage", "thumbnail", {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("tbl_webpage", "thumbnail", {
      type: Sequelize.STRING,
    });
  },
};
