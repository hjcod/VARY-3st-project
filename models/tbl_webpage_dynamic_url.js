const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_webpage_dynamic_url', {
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
    dynamic_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    statistic_json_array_object: {
      type: DataTypes.TEXT,
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
    }
  }, {
    sequelize,
    tableName: 'tbl_webpage_dynamic_url',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_webpage_dynamic_url_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
