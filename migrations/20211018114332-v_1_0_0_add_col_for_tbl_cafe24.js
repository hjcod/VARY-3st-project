'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_cafe24_fields', 'updated_time_from_cafe24', {
      type: Sequelize.BIGINT,
      validate: {
        min: 0
      },
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_cafe24_fields', 'updated_time_from_cafe24');
  }
};