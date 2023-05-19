const express = require("express");
const router = express.Router();
const {
  models: { Ad, User, Review },
} = require("../db");

router.post("/", async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    const newReviewWithUser = await Review.findByPk(newReview.id, {
      include: [{ model: User, as: "user" }],
    });
    res.json(newReviewWithUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
