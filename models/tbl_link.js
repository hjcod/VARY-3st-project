const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_link', {
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
    redirect_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number_of_click: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_of_user: {
      type: DataTypes.INTEGER,
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
    parent_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_link',
        key: 'id'
      }
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
    tableName: 'tbl_link',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_link_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
