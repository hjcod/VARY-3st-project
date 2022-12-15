const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_auto_sending_email_template', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target_audience: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    condition: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    forwarding_mail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(255),
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
    pending_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preview: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bg_color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    font_color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    usefull: {
      type: DataTypes.JSONB,
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 99999
    },
    template: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_auto_sending_email_template',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_auto_sending_email_template_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
