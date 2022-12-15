const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_customer', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    list_customers_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_list_customers',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_subscriber: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    data_extra_fields: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    number_of_click_mail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    number_of_open_mail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    random_short_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cafe24_created_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cafe24_last_login_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cafe24_member_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cafe24_fields_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_cafe24_fields',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_customer',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_customer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
