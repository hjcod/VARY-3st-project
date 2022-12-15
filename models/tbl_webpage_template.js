const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_webpage_template', {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    preview: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    extra_fields: {
      type: DataTypes.ARRAY(DataTypes.STRING),
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
    webpage_template_category_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 9999999
    },
    is_category_none: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tbl_webpage_template',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_webpage_template_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
