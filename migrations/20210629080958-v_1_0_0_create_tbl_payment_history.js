'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_payment_history', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
      },
      payment_history_group: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      imp_uid: {
        type: Sequelize.STRING,
      },
      credit_card_last_4_digits: {
        type: Sequelize.STRING
      },
      total_amount: {
        type: Sequelize.INTEGER
      },
      real_amount: {
        type: Sequelize.INTEGER
      },
      vat_amount: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      plan: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      activate_date: {
        type: Sequelize.BIGINT
      },
      expire_date: {
        type: Sequelize.BIGINT
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      updated_at_unix_timestamp: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
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
    return await queryInterface.dropTable('tbl_payment_history');
  }
};