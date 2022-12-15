const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sender', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_user',
        key: 'id'
      }
    },
    dkim_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    domain: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_username: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
    is_subscribe_advertisement: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    max_number_of_email: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    max_number_of_email_per_month: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sengrid_dkim: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_sender',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_sender_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
