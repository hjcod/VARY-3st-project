'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_auto_sending_email_template', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.TEXT,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      target_audience: {
        type: Sequelize.STRING,
      },
      condition: {
        type: Sequelize.JSONB,
      },
      time: {
        type: Sequelize.STRING,
      },
      forwarding_mail: {
        type: Sequelize.STRING,
      },
      method: {
        type: Sequelize.STRING,
      },
      conditions: {
        type: Sequelize.JSONB,
      },
      operation_method: {
        type: Sequelize.JSONB,
      },
      pending_time: {
        type: Sequelize.INTEGER,
      },
      preview: {
        type: Sequelize.STRING,
      },
      bg_color: {
        type: Sequelize.STRING,
      },
      font_color: {
        type: Sequelize.STRING,
      },
      usefull: {
        type: Sequelize.JSONB,
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
    return await queryInterface.dropTable('tbl_auto_sending_email_template');
  }
};