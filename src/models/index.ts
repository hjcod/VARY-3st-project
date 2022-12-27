import { Sequelize } from "sequelize";
const env = "test";
const config = require("../config/config")[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    logging: false,
  }
);
