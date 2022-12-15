const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_blueprint_categories', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    blueprint_category_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_blueprint_category',
        key: 'id'
      }
    },
    blueprint_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_blueprint',
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
    auto_campaign_template_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_auto_campaign',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_blueprint_categories',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_blueprint_categories_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
