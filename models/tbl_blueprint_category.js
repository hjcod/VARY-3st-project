const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_blueprint_category', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_blueprint_category',
        key: 'id'
      }
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 9999999
    },
    is_auto_campaign_template: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tbl_blueprint_category',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_blueprint_category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
