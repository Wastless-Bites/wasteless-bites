const express = require("express");
const router = express.Router();
const {
  models: { Ad, User },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const ads = await Ad.findAll({
      include: [
        {
          model: User,
          as: "organization",
        },
      ],
    });
    res.json(ads);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const newAd = await Ad.create(req.body);
    res.json(newAd);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
