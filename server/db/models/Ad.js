const Sequelize = require("sequelize");
const db = require("../db");

const Ad = db.define("Ad", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  availableFrom: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  availableUntil: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  coming: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Ad;
