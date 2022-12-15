'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_campaign', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      blueprint_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_blueprint',
          key: 'id'
        },
        allowNull: true
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_user',
          key: 'id'
        },
        allowNull: false
      },
      is_public: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING
      },
      sender_address: {
        type: Sequelize.STRING
      },
      sender_name: {
        type: Sequelize.STRING
      },
      sender_name: {
        type: Sequelize.STRING
      },
      list_name: {
        type: Sequelize.STRING
      },
      list_name: {
        type: Sequelize.STRING
      },
      blueprint_name: {
        type: Sequelize.STRING
      },
      trigger_name: {
        type: Sequelize.STRING
      },
      data_fields: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      },
      recipient_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      sent_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      category: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
      },
      description: {
        type: Sequelize.TEXT
      },
      is_locked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      number_of_open: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      number_of_click: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      sending_time: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      state:{
        type: Sequelize.STRING
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
    return await queryInterface.dropTable('tbl_campaign');
  }
};