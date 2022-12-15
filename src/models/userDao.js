const { Sequelize } = require("sequelize");
const { sequelize } = require("../models/index");

const getUserInfo = async () => {
  const query = `SELECT * FROM tbl_user LIMIT 10`;
  const result = await sequelize.query(query, { type: Sequelize.SELECT });
  return result;
};

module.exports = {
  getUserInfo,
};
