const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "tbl_user",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      is_super_user: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      picture_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      is_staff: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      region: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      last_login: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      refresh_token: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: ["ARRAY[]"],
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at_unix_timestamp: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      gallery: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: ["(ARRAY[]"],
      },
      company_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      company_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      company_position: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      company_size: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      company_industry: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email_text_color: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email_link_color: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email_button_color: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email_logo_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      sent_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      reservation_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      inputing_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      preparing_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      auto_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      maximum_webpage_storage: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      current_webpage_storage: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      preparing_webpages_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stopped_webpages_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      running_webpages_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updating_webpages_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      sub_domain: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      payment_info_business_license: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      payment_info_address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      payment_info_email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      payment_info_phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      payment_info_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      credit_card_expire_date: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      credit_card_last_4_digits: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      maximum_webpage_view: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      current_webpage_view: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reset_date: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      webpage_dynamic_url_plan: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      webpage_additional_storage_plan_purchased_storage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      webpage_plan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email_plan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      maximum_email_sent_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      current_email_sent_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      identity_card_number: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      processing_auto_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      preparing_auto_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      stopped_auto_campaigns_number: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      credit_card_birth: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      payment_info_card_number: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      send_issue_storage_to_user: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      send_issue_view_to_user: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      is_remove_plan: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      invalid_token_list: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
        defaultValue: ["ARRAY[]"],
      },
      is_additional: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      number_of_webpage_view_excess: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      number_of_mail_excess: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0,
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      cafe24_access_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cafe24_refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cafe24_mall_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      block_by_payment_fail: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_user",
      schema: "public",
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: "tbl_user_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
