const db = require("./db");

const User = require("./models/User");
const Review = require("./models/Review");
const Ad = require("./models/Ad");

// associations
User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
User.hasMany(Ad, { foreignKey: "organizationId", as: "ads" });

Review.belongsTo(User, { foreignKey: "userId", as: "user" });

Ad.belongsTo(User, { foreignKey: "organizationId", as: "organization" });

module.exports = {
  db,
  models: {
    User,
    Review,
    Ad,
  },
};
