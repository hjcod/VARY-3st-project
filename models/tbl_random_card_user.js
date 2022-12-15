const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_random_card_user', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    block_random_card_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_block_random_card',
        key: 'id'
      }
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isWin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isUseCoupon: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    webpage_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_webpage',
        key: 'id'
      }
    },
    random_card_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_random_card',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_random_card_user',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_random_card_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
