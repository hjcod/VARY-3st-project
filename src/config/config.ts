require("dotenv").config();

const development = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
  secret: process.env.SERVER_SECRET,
};

const production = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
  secret: process.env.SERVER_SECRET,
};

const test = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
  secret: process.env.SERVER_SECRET,
};

module.exports = { development, production, test };
