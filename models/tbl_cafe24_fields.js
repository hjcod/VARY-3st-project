const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_cafe24_fields', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    member_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    refund_account_information: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_classification: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_amout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_of_orders: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount_used: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    refund_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    actual_payment_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_of_visits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accumulated_fund: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    member_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_authentication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_suspended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    created_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    last_purchase_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    last_login_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    upgrade_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    birthday: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_time_from_cafe24: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_cafe24_fields',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_cafe24_fields_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
