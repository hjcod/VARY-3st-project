const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sub_webpage', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    webpage_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    webpage_template_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preview: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    page_number: {
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
    combined_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    size: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_sub_webpage',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "tbl_sub_webpage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
