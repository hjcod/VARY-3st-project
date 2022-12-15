'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_cafe24_fields', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      member_id: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      member_level: {
        type: Sequelize.STRING,
      },
      refund_account_information: {
        type: Sequelize.STRING,
      },
      business_classification: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      order_amout: {
        type: Sequelize.INTEGER,
      },
      number_of_orders: {
        type: Sequelize.INTEGER,
      },
      amount_used: {
        type: Sequelize.INTEGER,
      },
      refund_amount: {
        type: Sequelize.INTEGER,
      },
      actual_payment_amount: {
        type: Sequelize.INTEGER,
      },
      number_of_visits: {
        type: Sequelize.INTEGER,
      },
      accumulated_fund: {
        type: Sequelize.INTEGER,
      },
      ip_address: {
        type: Sequelize.INTEGER,
      },
      member_number: {
        type: Sequelize.INTEGER,
      },
      zipcode: {
        type: Sequelize.INTEGER,
      },
      phone_number: {
        type: Sequelize.INTEGER,
      },
      order_number: {
        type: Sequelize.INTEGER,
      },
      is_authentication: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      is_suspended: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      created_at_unix_timestamp: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      last_purchase_date: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      last_login_date: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      upgrade_date: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      birthday: {
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
    return await queryInterface.dropTable('tbl_cafe24_fields');
  }
};