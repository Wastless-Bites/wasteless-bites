const Sequelize = require("sequelize");
const db = require("../db");

const Ad = db.define("Ad", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
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
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.coeliac.org.uk/public/images/medium_healthy-food.png",
  },
});

module.exports = Ad;
