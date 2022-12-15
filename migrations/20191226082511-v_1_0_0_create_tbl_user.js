'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.createTable('tbl_user', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_super_user: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
      },
      picture_url: {
        type: Sequelize.STRING
      },
      gallery: {
        type: Sequelize.ARRAY({ type: Sequelize.STRING }),
        defaultValue: [],
      },
      grade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING
      },
      is_staff: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      region: {
        type: Sequelize.STRING
      },
      last_login: {
        type: Sequelize.BIGINT,
        validate: {
          min: 0
        }
      },
      refresh_token: {
        type: Sequelize.ARRAY({ type: Sequelize.TEXT }),
        defaultValue: [],
        allowNull: false
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
    return await queryInterface.dropTable('tbl_user');
  }
};