const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_payment_schedule', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    merchant_uid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_payment_history',
        key: 'id'
      }
    },
    customer_uid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_user',
        key: 'id'
      }
    },
    schedule_at: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    custom_data: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyer_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buyer_addr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    created_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    schedule_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    can_retry: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_back_to_free: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tbl_payment_schedule',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_payment_schedule_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
