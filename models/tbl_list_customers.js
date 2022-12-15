const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_list_customers', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'tbl_user',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number_of_receiver: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_of_custom_data_item: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number_of_campaign_usage_count: {
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
    button_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    show_content: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    subscription_explanation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subscription_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscription_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    extra_fields: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    form_html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_customer_of_last_updated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    complete_html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    form_json_content: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    complete_json_content: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    updated_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    number_of_receiver_is_subscriber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    default_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    default_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_connect_cafe24: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    cafe24_mall_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_disconnected_cafe24: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tbl_list_customers',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_list_customers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
