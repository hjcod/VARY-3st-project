const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sendgrid_message', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    campaign_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_campaign',
        key: 'id'
      }
    },
    customers_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_customer',
        key: 'id'
      }
    },
    sendgrid_message_id: {
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
    auto_campaign_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_auto_campaign',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_sendgrid_message',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_sendgrid_message_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
