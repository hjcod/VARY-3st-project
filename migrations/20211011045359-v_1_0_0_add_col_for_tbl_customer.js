'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_customer', 'cafe24_fields_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_cafe24_fields',
        key: 'id'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_customer', 'cafe24_fields_id');
  }
};