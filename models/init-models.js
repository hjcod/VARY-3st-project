var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _tbl_api_key = require("./tbl_api_key");
var _tbl_auto_campaign = require("./tbl_auto_campaign");
var _tbl_auto_sending_email_template = require("./tbl_auto_sending_email_template");
var _tbl_block = require("./tbl_block");
var _tbl_block_feedback = require("./tbl_block_feedback");
var _tbl_block_random_card = require("./tbl_block_random_card");
var _tbl_blueprint = require("./tbl_blueprint");
var _tbl_blueprint_categories = require("./tbl_blueprint_categories");
var _tbl_blueprint_category = require("./tbl_blueprint_category");
var _tbl_cafe24_fields = require("./tbl_cafe24_fields");
var _tbl_campaign = require("./tbl_campaign");
var _tbl_code_unique = require("./tbl_code_unique");
var _tbl_content = require("./tbl_content");
var _tbl_customer = require("./tbl_customer");
var _tbl_customer_feedback = require("./tbl_customer_feedback");
var _tbl_event_webpage_dynamic_url = require("./tbl_event_webpage_dynamic_url");
var _tbl_host_dns = require("./tbl_host_dns");
var _tbl_link = require("./tbl_link");
var _tbl_list_customers = require("./tbl_list_customers");
var _tbl_payment_error_log = require("./tbl_payment_error_log");
var _tbl_payment_history = require("./tbl_payment_history");
var _tbl_payment_schedule = require("./tbl_payment_schedule");
var _tbl_preview_webpage = require("./tbl_preview_webpage");
var _tbl_random_card = require("./tbl_random_card");
var _tbl_random_card_user = require("./tbl_random_card_user");
var _tbl_sender = require("./tbl_sender");
var _tbl_sendgrid_message = require("./tbl_sendgrid_message");
var _tbl_static_webpage = require("./tbl_static_webpage");
var _tbl_statistics_auto_campaign = require("./tbl_statistics_auto_campaign");
var _tbl_statistics_campaign = require("./tbl_statistics_campaign");
var _tbl_sub_webpage = require("./tbl_sub_webpage");
var _tbl_user = require("./tbl_user");
var _tbl_user_click = require("./tbl_user_click");
var _tbl_user_company_industry = require("./tbl_user_company_industry");
var _tbl_user_company_position = require("./tbl_user_company_position");
var _tbl_user_company_size = require("./tbl_user_company_size");
var _tbl_webpage = require("./tbl_webpage");
var _tbl_webpage_dynamic_url = require("./tbl_webpage_dynamic_url");
var _tbl_webpage_template = require("./tbl_webpage_template");
var _tbl_webpage_template_categories = require("./tbl_webpage_template_categories");
var _tbl_webpage_template_category = require("./tbl_webpage_template_category");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var tbl_api_key = _tbl_api_key(sequelize, DataTypes);
  var tbl_auto_campaign = _tbl_auto_campaign(sequelize, DataTypes);
  var tbl_auto_sending_email_template = _tbl_auto_sending_email_template(sequelize, DataTypes);
  var tbl_block = _tbl_block(sequelize, DataTypes);
  var tbl_block_feedback = _tbl_block_feedback(sequelize, DataTypes);
  var tbl_block_random_card = _tbl_block_random_card(sequelize, DataTypes);
  var tbl_blueprint = _tbl_blueprint(sequelize, DataTypes);
  var tbl_blueprint_categories = _tbl_blueprint_categories(sequelize, DataTypes);
  var tbl_blueprint_category = _tbl_blueprint_category(sequelize, DataTypes);
  var tbl_cafe24_fields = _tbl_cafe24_fields(sequelize, DataTypes);
  var tbl_campaign = _tbl_campaign(sequelize, DataTypes);
  var tbl_code_unique = _tbl_code_unique(sequelize, DataTypes);
  var tbl_content = _tbl_content(sequelize, DataTypes);
  var tbl_customer = _tbl_customer(sequelize, DataTypes);
  var tbl_customer_feedback = _tbl_customer_feedback(sequelize, DataTypes);
  var tbl_event_webpage_dynamic_url = _tbl_event_webpage_dynamic_url(sequelize, DataTypes);
  var tbl_host_dns = _tbl_host_dns(sequelize, DataTypes);
  var tbl_link = _tbl_link(sequelize, DataTypes);
  var tbl_list_customers = _tbl_list_customers(sequelize, DataTypes);
  var tbl_payment_error_log = _tbl_payment_error_log(sequelize, DataTypes);
  var tbl_payment_history = _tbl_payment_history(sequelize, DataTypes);
  var tbl_payment_schedule = _tbl_payment_schedule(sequelize, DataTypes);
  var tbl_preview_webpage = _tbl_preview_webpage(sequelize, DataTypes);
  var tbl_random_card = _tbl_random_card(sequelize, DataTypes);
  var tbl_random_card_user = _tbl_random_card_user(sequelize, DataTypes);
  var tbl_sender = _tbl_sender(sequelize, DataTypes);
  var tbl_sendgrid_message = _tbl_sendgrid_message(sequelize, DataTypes);
  var tbl_static_webpage = _tbl_static_webpage(sequelize, DataTypes);
  var tbl_statistics_auto_campaign = _tbl_statistics_auto_campaign(sequelize, DataTypes);
  var tbl_statistics_campaign = _tbl_statistics_campaign(sequelize, DataTypes);
  var tbl_sub_webpage = _tbl_sub_webpage(sequelize, DataTypes);
  var tbl_user = _tbl_user(sequelize, DataTypes);
  var tbl_user_click = _tbl_user_click(sequelize, DataTypes);
  var tbl_user_company_industry = _tbl_user_company_industry(sequelize, DataTypes);
  var tbl_user_company_position = _tbl_user_company_position(sequelize, DataTypes);
  var tbl_user_company_size = _tbl_user_company_size(sequelize, DataTypes);
  var tbl_webpage = _tbl_webpage(sequelize, DataTypes);
  var tbl_webpage_dynamic_url = _tbl_webpage_dynamic_url(sequelize, DataTypes);
  var tbl_webpage_template = _tbl_webpage_template(sequelize, DataTypes);
  var tbl_webpage_template_categories = _tbl_webpage_template_categories(sequelize, DataTypes);
  var tbl_webpage_template_category = _tbl_webpage_template_category(sequelize, DataTypes);

  tbl_block_feedback.belongsTo(tbl_auto_campaign, { as: "auto_campaign", foreignKey: "auto_campaign_id"});
  tbl_auto_campaign.hasMany(tbl_block_feedback, { as: "tbl_block_feedbacks", foreignKey: "auto_campaign_id"});
  tbl_block_random_card.belongsTo(tbl_auto_campaign, { as: "auto_campaign", foreignKey: "auto_campaign_id"});
  tbl_auto_campaign.hasMany(tbl_block_random_card, { as: "tbl_block_random_cards", foreignKey: "auto_campaign_id"});
  tbl_blueprint_categories.belongsTo(tbl_auto_campaign, { as: "auto_campaign_template", foreignKey: "auto_campaign_template_id"});
  tbl_auto_campaign.hasMany(tbl_blueprint_categories, { as: "tbl_blueprint_categories", foreignKey: "auto_campaign_template_id"});
  tbl_link.belongsTo(tbl_auto_campaign, { as: "auto_campaign", foreignKey: "auto_campaign_id"});
  tbl_auto_campaign.hasMany(tbl_link, { as: "tbl_links", foreignKey: "auto_campaign_id"});
  tbl_sendgrid_message.belongsTo(tbl_auto_campaign, { as: "auto_campaign", foreignKey: "auto_campaign_id"});
  tbl_auto_campaign.hasMany(tbl_sendgrid_message, { as: "tbl_sendgrid_messages", foreignKey: "auto_campaign_id"});
  tbl_statistics_auto_campaign.belongsTo(tbl_auto_campaign, { as: "auto_campaign", foreignKey: "auto_campaign_id"});
  tbl_auto_campaign.hasMany(tbl_statistics_auto_campaign, { as: "tbl_statistics_auto_campaigns", foreignKey: "auto_campaign_id"});
  tbl_customer_feedback.belongsTo(tbl_block_feedback, { as: "block_feedback", foreignKey: "block_feedback_id"});
  tbl_block_feedback.hasMany(tbl_customer_feedback, { as: "tbl_customer_feedbacks", foreignKey: "block_feedback_id"});
  tbl_random_card.belongsTo(tbl_block_random_card, { as: "block_random_card", foreignKey: "block_random_card_id"});
  tbl_block_random_card.hasMany(tbl_random_card, { as: "tbl_random_cards", foreignKey: "block_random_card_id"});
  tbl_random_card_user.belongsTo(tbl_block_random_card, { as: "block_random_card", foreignKey: "block_random_card_id"});
  tbl_block_random_card.hasMany(tbl_random_card_user, { as: "tbl_random_card_users", foreignKey: "block_random_card_id"});
  tbl_auto_campaign.belongsTo(tbl_blueprint, { as: "blueprint", foreignKey: "blueprint_id"});
  tbl_blueprint.hasMany(tbl_auto_campaign, { as: "tbl_auto_campaigns", foreignKey: "blueprint_id"});
  tbl_blueprint_categories.belongsTo(tbl_blueprint, { as: "blueprint", foreignKey: "blueprint_id"});
  tbl_blueprint.hasMany(tbl_blueprint_categories, { as: "tbl_blueprint_categories", foreignKey: "blueprint_id"});
  tbl_campaign.belongsTo(tbl_blueprint, { as: "blueprint", foreignKey: "blueprint_id"});
  tbl_blueprint.hasMany(tbl_campaign, { as: "tbl_campaigns", foreignKey: "blueprint_id"});
  tbl_blueprint_categories.belongsTo(tbl_blueprint_category, { as: "blueprint_category", foreignKey: "blueprint_category_id"});
  tbl_blueprint_category.hasMany(tbl_blueprint_categories, { as: "tbl_blueprint_categories", foreignKey: "blueprint_category_id"});
  tbl_blueprint_category.belongsTo(tbl_blueprint_category, { as: "parent", foreignKey: "parent_id"});
  tbl_blueprint_category.hasMany(tbl_blueprint_category, { as: "parent_tbl_blueprint_categories", foreignKey: "parent_id"});
  tbl_customer.belongsTo(tbl_cafe24_fields, { as: "cafe24_field", foreignKey: "cafe24_fields_id"});
  tbl_cafe24_fields.hasMany(tbl_customer, { as: "tbl_customers", foreignKey: "cafe24_fields_id"});
  tbl_block_feedback.belongsTo(tbl_campaign, { as: "campaign", foreignKey: "campaign_id"});
  tbl_campaign.hasMany(tbl_block_feedback, { as: "tbl_block_feedbacks", foreignKey: "campaign_id"});
  tbl_block_random_card.belongsTo(tbl_campaign, { as: "campaign", foreignKey: "campaign_id"});
  tbl_campaign.hasMany(tbl_block_random_card, { as: "tbl_block_random_cards", foreignKey: "campaign_id"});
  tbl_link.belongsTo(tbl_campaign, { as: "campaign", foreignKey: "campaign_id"});
  tbl_campaign.hasMany(tbl_link, { as: "tbl_links", foreignKey: "campaign_id"});
  tbl_sendgrid_message.belongsTo(tbl_campaign, { as: "campaign", foreignKey: "campaign_id"});
  tbl_campaign.hasMany(tbl_sendgrid_message, { as: "tbl_sendgrid_messages", foreignKey: "campaign_id"});
  tbl_statistics_campaign.belongsTo(tbl_campaign, { as: "campaign", foreignKey: "campaign_id"});
  tbl_campaign.hasMany(tbl_statistics_campaign, { as: "tbl_statistics_campaigns", foreignKey: "campaign_id"});
  tbl_customer_feedback.belongsTo(tbl_customer, { as: "customer", foreignKey: "customer_id"});
  tbl_customer.hasMany(tbl_customer_feedback, { as: "tbl_customer_feedbacks", foreignKey: "customer_id"});
  tbl_sendgrid_message.belongsTo(tbl_customer, { as: "customer", foreignKey: "customers_id"});
  tbl_customer.hasMany(tbl_sendgrid_message, { as: "tbl_sendgrid_messages", foreignKey: "customers_id"});
  tbl_statistics_auto_campaign.belongsTo(tbl_customer, { as: "customer", foreignKey: "customer_id"});
  tbl_customer.hasMany(tbl_statistics_auto_campaign, { as: "tbl_statistics_auto_campaigns", foreignKey: "customer_id"});
  tbl_statistics_campaign.belongsTo(tbl_customer, { as: "customer", foreignKey: "customer_id"});
  tbl_customer.hasMany(tbl_statistics_campaign, { as: "tbl_statistics_campaigns", foreignKey: "customer_id"});
  tbl_user_click.belongsTo(tbl_customer, { as: "customer", foreignKey: "customer_id"});
  tbl_customer.hasMany(tbl_user_click, { as: "tbl_user_clicks", foreignKey: "customer_id"});
  tbl_link.belongsTo(tbl_link, { as: "parent", foreignKey: "parent_id"});
  tbl_link.hasMany(tbl_link, { as: "tbl_links", foreignKey: "parent_id"});
  tbl_user_click.belongsTo(tbl_link, { as: "link", foreignKey: "link_id"});
  tbl_link.hasMany(tbl_user_click, { as: "tbl_user_clicks", foreignKey: "link_id"});
  tbl_auto_campaign.belongsTo(tbl_list_customers, { as: "list_customer", foreignKey: "list_customers_id"});
  tbl_list_customers.hasMany(tbl_auto_campaign, { as: "tbl_auto_campaigns", foreignKey: "list_customers_id"});
  tbl_campaign.belongsTo(tbl_list_customers, { as: "list_customer", foreignKey: "list_customers_id"});
  tbl_list_customers.hasMany(tbl_campaign, { as: "tbl_campaigns", foreignKey: "list_customers_id"});
  tbl_customer.belongsTo(tbl_list_customers, { as: "list_customer", foreignKey: "list_customers_id"});
  tbl_list_customers.hasMany(tbl_customer, { as: "tbl_customers", foreignKey: "list_customers_id"});
  tbl_payment_history.belongsTo(tbl_payment_history, { as: "parent", foreignKey: "parent_id"});
  tbl_payment_history.hasMany(tbl_payment_history, { as: "tbl_payment_histories", foreignKey: "parent_id"});
  tbl_payment_schedule.belongsTo(tbl_payment_history, { as: "merchant_u", foreignKey: "merchant_uid"});
  tbl_payment_history.hasMany(tbl_payment_schedule, { as: "tbl_payment_schedules", foreignKey: "merchant_uid"});
  tbl_random_card_user.belongsTo(tbl_random_card, { as: "random_card", foreignKey: "random_card_id"});
  tbl_random_card.hasMany(tbl_random_card_user, { as: "tbl_random_card_users", foreignKey: "random_card_id"});
  tbl_auto_campaign.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_auto_campaign, { as: "tbl_auto_campaigns", foreignKey: "user_id"});
  tbl_block.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_block, { as: "tbl_blocks", foreignKey: "user_id"});
  tbl_campaign.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_campaign, { as: "tbl_campaigns", foreignKey: "user_id"});
  tbl_content.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "user_id"});
  tbl_list_customers.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_list_customers, { as: "tbl_list_customers", foreignKey: "user_id"});
  tbl_payment_error_log.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_payment_error_log, { as: "tbl_payment_error_logs", foreignKey: "user_id"});
  tbl_payment_schedule.belongsTo(tbl_user, { as: "customer_u", foreignKey: "customer_uid"});
  tbl_user.hasMany(tbl_payment_schedule, { as: "tbl_payment_schedules", foreignKey: "customer_uid"});
  tbl_sender.belongsTo(tbl_user, { as: "user", foreignKey: "user_id"});
  tbl_user.hasMany(tbl_sender, { as: "tbl_senders", foreignKey: "user_id"});
  tbl_block_feedback.belongsTo(tbl_webpage, { as: "webpage", foreignKey: "webpage_id"});
  tbl_webpage.hasMany(tbl_block_feedback, { as: "tbl_block_feedbacks", foreignKey: "webpage_id"});
  tbl_block_random_card.belongsTo(tbl_webpage, { as: "webpage", foreignKey: "webpage_id"});
  tbl_webpage.hasMany(tbl_block_random_card, { as: "tbl_block_random_cards", foreignKey: "webpage_id"});
  tbl_random_card.belongsTo(tbl_webpage, { as: "webpage", foreignKey: "webpage_id"});
  tbl_webpage.hasMany(tbl_random_card, { as: "tbl_random_cards", foreignKey: "webpage_id"});
  tbl_random_card_user.belongsTo(tbl_webpage, { as: "webpage", foreignKey: "webpage_id"});
  tbl_webpage.hasMany(tbl_random_card_user, { as: "tbl_random_card_users", foreignKey: "webpage_id"});
  tbl_webpage_template_categories.belongsTo(tbl_webpage_template, { as: "webpage_template", foreignKey: "webpage_template_id"});
  tbl_webpage_template.hasMany(tbl_webpage_template_categories, { as: "tbl_webpage_template_categories", foreignKey: "webpage_template_id"});
  tbl_webpage_template_categories.belongsTo(tbl_webpage_template_category, { as: "webpage_template_category", foreignKey: "webpage_template_category_id"});
  tbl_webpage_template_category.hasMany(tbl_webpage_template_categories, { as: "tbl_webpage_template_categories", foreignKey: "webpage_template_category_id"});
  tbl_webpage_template_category.belongsTo(tbl_webpage_template_category, { as: "parent", foreignKey: "parent_id"});
  tbl_webpage_template_category.hasMany(tbl_webpage_template_category, { as: "parent_tbl_webpage_template_categories", foreignKey: "parent_id"});

  return {
    SequelizeMeta,
    tbl_api_key,
    tbl_auto_campaign,
    tbl_auto_sending_email_template,
    tbl_block,
    tbl_block_feedback,
    tbl_block_random_card,
    tbl_blueprint,
    tbl_blueprint_categories,
    tbl_blueprint_category,
    tbl_cafe24_fields,
    tbl_campaign,
    tbl_code_unique,
    tbl_content,
    tbl_customer,
    tbl_customer_feedback,
    tbl_event_webpage_dynamic_url,
    tbl_host_dns,
    tbl_link,
    tbl_list_customers,
    tbl_payment_error_log,
    tbl_payment_history,
    tbl_payment_schedule,
    tbl_preview_webpage,
    tbl_random_card,
    tbl_random_card_user,
    tbl_sender,
    tbl_sendgrid_message,
    tbl_static_webpage,
    tbl_statistics_auto_campaign,
    tbl_statistics_campaign,
    tbl_sub_webpage,
    tbl_user,
    tbl_user_click,
    tbl_user_company_industry,
    tbl_user_company_position,
    tbl_user_company_size,
    tbl_webpage,
    tbl_webpage_dynamic_url,
    tbl_webpage_template,
    tbl_webpage_template_categories,
    tbl_webpage_template_category,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
