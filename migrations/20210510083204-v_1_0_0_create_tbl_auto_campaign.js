'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_auto_campaign', {
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
      },
      list_customers_id: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_list_customers',
          key: 'id'
        },
        allowNull: true
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
        type: Sequelize.TEXT,
        allowNull: true
      },
      preview: {
        type: Sequelize.STRING,
        allowNull: true
      },
      review: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sender_address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sender_name: {
        type: Sequelize.STRING,
        allowNull: true
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
      useful_things: {
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
      number_of_unsubscribed: {
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
      shipment_success_list: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      open_list: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      click_list: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      spam_list: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      reject_list: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      fail_list: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      start_time: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      end_time: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      days_of_week: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      pending_time: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0
        }
      },
      period_time: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING })
      },
      filter: {
        type: Sequelize.JSON
      },
      state: {
        type: Sequelize.STRING,
        validate: {
          isIn: [
            ["PROCESSING", "STOPPED", "PREPARING"]
          ]
        },
        defaultValue: "PREPARING",
        allowNull: false
      },
      content: {
        type: Sequelize.JSON,
      },
      is_advertisement_enabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    return await queryInterface.dropTable('tbl_auto_campaign');
  }
};