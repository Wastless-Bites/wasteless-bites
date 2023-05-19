const db = require("./db");

const User = require("./models/User");
const Review = require("./models/Review");
const Ad = require("./models/Ad");

// associations
User.hasMany(Ad, { foreignKey: "organizationId", as: "ads" });

User.hasMany(Review, { foreignKey: "userId", as: "userReviews" });
User.hasMany(Review, {
  foreignKey: "organizationId",
  as: "organizationReviews",
});
Review.belongsTo(User, { foreignKey: "userId", as: "user" });
Review.belongsTo(User, {
  foreignKey: "organizationId",
  as: "reviewedOrganization",
});

Ad.belongsTo(User, { foreignKey: "organizationId", as: "organization" });

module.exports = {
  db,
  models: {
    User,
    Review,
    Ad,
  },
};
