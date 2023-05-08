const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName = pkg.name;

const config = {
  logging: false,
};

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);

module.exports = db;
