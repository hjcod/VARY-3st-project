const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user_click', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    link_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_link',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_customer',
        key: 'id'
      }
    },
    number_of_click: {
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
    }
  }, {
    sequelize,
    tableName: 'tbl_user_click',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_user_click_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
