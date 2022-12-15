const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_payment_history', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    payment_history_group: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imp_uid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    credit_card_last_4_digits: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    real_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vat_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activate_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    expire_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    updated_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_payment_history',
        key: 'id'
      }
    },
    reset_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount_of_storage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    storage_add_on: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 209715200
    }
  }, {
    sequelize,
    tableName: 'tbl_payment_history',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_payment_history_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
