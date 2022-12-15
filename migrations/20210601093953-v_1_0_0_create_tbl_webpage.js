'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_webpage', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
      },
      title: {
        type: Sequelize.STRING,
      },
      set_url_name: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      url: {
        type: Sequelize.STRING,
      },
      current_webpage_storage: {
        type: Sequelize.INTEGER,
      },
      extra_fields: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING })
      },
      description: {
        type: Sequelize.STRING,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      deployment_limit_period: {
        type: Sequelize.ARRAY({ type: Sequelize.BIGINT })
      },
      deployment_limit_number: {
        type: Sequelize.INTEGER,
      },
      deployment_current_number: {
        type: Sequelize.INTEGER,
      },
      page_number: {
        type: Sequelize.INTEGER,
      },
      state: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      created_at_unix_timestamp: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      deleted_at: { type: 'TIMESTAMP' }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.dropTable('tbl_webpage');
  }
};