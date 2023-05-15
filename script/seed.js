const { db, models } = require("../server/db/index");
const { User, Review, Ad } = models;

const seed = async () => {
  await db.sync({ force: true });

  // Create users
  const adminUser = await User.create({
    username: "Admin",
    password: "123",
    email: "admin@example.com",
    address: "123 Admin St",
    description: "I am the admin user",
    userType: "individual",
    isAdmin: true,
    latitude: 90,
    longitude: 90,
  });

  const individualUser = await User.create({
    username: "Individual",
    password: "123",
    email: "individual@example.com",
    address: "456 Individual St",
    description: "I am the individual user",
    userType: "individual",
    latitude: 90,
    longitude: 90,
  });

  const organizationUser = await User.create({
    username: "Organization",
    password: "123",
    email: "organization@example.com",
    address: "789 Organization St",
    description: "I am the organization user",
    userType: "organization",
    latitude: 90,
    longitude: 90,
  });

  const dinosaurBarbBQue = await User.create({
    username: "Dinosaur Bar-B-Q",
    password: "123",
    email: "dinosaur@example.com",
    address: "604 Union St, Brooklyn, NY 11215",
    description:
      "Barbecue chain serving Southern-style meats & draft brews in a retro setting with live music.",
    userType: "organization",
    latitude: "40.677685",
    longitude: "-73.98401",
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
    title: "Get Your Corn!!",
    description: "Delicious food available",
    availableFrom: new Date(),
    availableUntil: new Date(),
    isExpired: false,
    coming: 10,
    organizationId: organizationUser.id,
    imageUrl:
      "https://chefsmandala.com/wp-content/uploads/2018/03/corn-600x338.jpg",
  });

  const dinosaurAd = await Ad.create({
    title: "Come and get your steaks!",
    description:
      "We accidentally ordered too many steaks and we won't be able to use them all.. come and get them!",
    availableFrom: new Date(),
    availableUntil: new Date(),
    isExpired: false,
    coming: 10,
    organizationId: dinosaurBarbBQue.id,
    imageUrl:
      "https://embed.widencdn.net/img/beef/ng96sbyljl/800x600px/Ribeye%20Steak_Lip-on.psd?keep=c&u=7fueml",
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
