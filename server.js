require("dotenv").config();

const { createApp } = require("./app");
const { sequelize } = require("../vary/src/models/index");

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

startServer();
