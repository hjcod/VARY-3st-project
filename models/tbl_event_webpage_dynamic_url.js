const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_event_webpage_dynamic_url', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    webpage_dynamic_url_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    page: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    times: {
      type: DataTypes.INTEGER,
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
    data: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_event_webpage_dynamic_url',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_event_webpage_dynamic_url_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
