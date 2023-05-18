const express = require("express");
const router = express.Router();
const {
  models: { Ad, User, Review },
} = require("../db");

router.post("/", async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.json(newReview);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
