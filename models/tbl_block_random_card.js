const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_block_random_card', {
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
    auto_campaign_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_auto_campaign',
        key: 'id'
      }
    },
    webpage_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_webpage',
        key: 'id'
      }
    },
    winning_phrase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    failed_phrase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_repeat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    default_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    webpage_page: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_block_random_card',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_block_random_card_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
