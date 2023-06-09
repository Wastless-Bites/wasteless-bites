const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("Review", {
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [10, 100],
      notEmpty: true,
      notNull: true,
    },
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  organizationId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

module.exports = Review;
