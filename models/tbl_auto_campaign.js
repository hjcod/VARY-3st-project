const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_auto_campaign', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    blueprint_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_blueprint',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_user',
        key: 'id'
      }
    },
    list_customers_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tbl_list_customers',
        key: 'id'
      }
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
    preview: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    review: {
      type: DataTypes.STRING(255),
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
    useful_things: {
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
    number_of_unsubscribed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    number_of_click: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    number_of_delivered: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    start_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    end_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    days_of_week: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    pending_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    period_time: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    filter: {
      type: DataTypes.JSON,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "PREPARING"
    },
    content: {
      type: DataTypes.JSON,
      allowNull: true
    },
    is_advertisement_enabled: {
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
    sending_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sending_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    delay_hours: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    end_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    number_of_sending_hours: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },
    conditions: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    operation_method: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    timezone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stop_status: {
      type: DataTypes.STRING(255),
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
    is_category_none: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_template: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    tableName: 'tbl_auto_campaign',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_auto_campaign_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
