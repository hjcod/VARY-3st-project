'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_block_random_card', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      number_id: {
        type: Sequelize.STRING,
      },
      campaign_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_campaign',
          key: 'id'
        },
      },
      auto_campaign_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_auto_campaign',
          key: 'id'
        },
      },
      webpage_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_webpage',
          key: 'id'
        },
      },
      winning_phrase: {
        type: Sequelize.STRING,
      },
      failed_phrase: {
        type: Sequelize.STRING,
      },
      is_repeat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      default_image: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    return await queryInterface.dropTable('tbl_block_random_card');
  }
};