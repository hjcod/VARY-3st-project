const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_static_webpage', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    webpage_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    webpage_customer_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    click_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page_number: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    webpage_dynamic_url_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_static_webpage',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_static_webpage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
