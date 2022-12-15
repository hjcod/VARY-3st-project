const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_random_card', {
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
    probability: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    maximum_number_of_win: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_win: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    order: {
      type: DataTypes.INTEGER,
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
    webpage_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_webpage',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_random_card',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_random_card_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
