'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_link', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      campaign_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_campaign',
          key: 'id'
        },
        allowNull: false
      },
      redirect_url: {
        type: Sequelize.STRING
      },
      number_of_click: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0
        }
      },
      number_of_user: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0
        }
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
    return await queryInterface.dropTable('tbl_link');
  }
};