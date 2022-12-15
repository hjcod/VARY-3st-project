const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_campaign', {
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
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sender_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sender_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    list_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    blueprint_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    trigger_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data_fields: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    recipient_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sent_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    number_of_open: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    number_of_click: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sending_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    state: {
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
    review: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    list_customers_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_list_customers',
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
    shipment_success_list: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    open_list: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    click_list: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    spam_list: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    reject_list: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    fail_list: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    preview: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_of_unsubscribed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    content: {
      type: DataTypes.JSON,
      allowNull: true
    },
    is_advertisement_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    failure_reasons: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: []
    },
    backup_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sg_message_id: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: []
    },
    total_number_user_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rating_avg: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    number_of_block: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    additional_comment_request_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_show_comment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'tbl_campaign',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_campaign_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
