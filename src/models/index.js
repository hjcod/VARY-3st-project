const { Sequelize } = require("sequelize");
const env = "test";
const config = require("../config/config")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = {
  sequelize,
};
