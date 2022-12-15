const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_block_feedback', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    number_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    campaign_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_campaign',
        key: 'id'
      }
    },
    number_of_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
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
    webpage_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_webpage',
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
    },
    star_data: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_block_feedback',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_block_feedback_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
