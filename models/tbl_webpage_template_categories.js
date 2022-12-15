const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_webpage_template_categories', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    webpage_template_category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_webpage_template_category',
        key: 'id'
      }
    },
    webpage_template_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_webpage_template',
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
    }
  }, {
    sequelize,
    tableName: 'tbl_webpage_template_categories',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_webpage_template_categories_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
