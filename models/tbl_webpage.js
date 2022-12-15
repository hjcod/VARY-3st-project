const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_webpage', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    set_url_name: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    current_webpage_storage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extra_fields: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deployment_limit_period: {
      type: DataTypes.ARRAY(DataTypes.BIGINT),
      allowNull: true
    },
    deployment_limit_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deployment_current_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    page_number: {
      type: DataTypes.INTEGER,
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
    is_suspended_due_to_plan_change: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    updated_at_unix_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dynamic_url_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    list_customer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url_field: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active_deployment_limit_number: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_active_deployment_limit_period: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    current_dynamic_url_storage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extra_field_dynamic_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expire_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_re_deploy: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_suspended_due_to_expire: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    thumbnail_from_html: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    comment: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: []
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
    tableName: 'tbl_webpage',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_webpage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
