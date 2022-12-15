'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_payment_schedule', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      merchant_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_payment_history',
          key: 'id'
        },
        allowNull: false
      },
      customer_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'tbl_user',
          key: 'id'
        },
        allowNull: false
      },
      schedule_at: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      amount: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      name: {
        type: Sequelize.STRING,
      },
      custom_data: {
        type: Sequelize.STRING,
      },
      buyer_email: {
        type: Sequelize.STRING,
      },
      buyer_name: {
        type: Sequelize.STRING,
      },
      buyer_addr: {
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
    return await queryInterface.dropTable('tbl_payment_schedule');
  }
};