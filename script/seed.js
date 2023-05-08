const { db, models } = require("../server/db/index");
const { User, Review, Ad } = models;

const seed = async () => {
  await db.sync({ force: true });

  // Create users
  const adminUser = await User.create({
    name: "Admin User",
    email: "admin@example.com",
    address: "123 Admin St",
    description: "I am the admin user",
    userType: "admin",
  });

  const individualUser = await User.create({
    name: "Individual User",
    email: "individual@example.com",
    address: "456 Individual St",
    description: "I am the individual user",
    userType: "individual",
  });

  const organizationUser = await User.create({
    name: "Organization User",
    email: "organization@example.com",
    address: "789 Organization St",
    description: "I am the organization user",
    userType: "organization",
  });

  // Create reviews
  const adminReview = await Review.create({
    comment: "This is a review by admin user.",
    userId: adminUser.id,
    organizationId: organizationUser.id,
  });

  const individualReview = await Review.create({
    comment: "This is a review by individual user.",
    userId: individualUser.id,
    organizationId: organizationUser.id,
  });

  // Create ad
  const organizationAd = await Ad.create({
    food_description: "Delicious food available",
    location: "New York",
    available_from: new Date(),
    available_until: new Date(),
    isExpired: false,
    coming: 10,
    organizationId: organizationUser.id,
  });

  console.log("Database seeded successfully");
};

seed()
  .then(() => {
    console.log("Seeding complete");
    db.close();
  })
  .catch((err) => {
    console.error("Error seeding database:", err);
    db.close();
  });