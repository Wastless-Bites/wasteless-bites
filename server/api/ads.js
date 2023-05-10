const express = require("express");
const router = express.Router();
const {
  models: { Ad, User },
} = require("../db");
const {
  authMiddleware,
  userTypeChecker,
  userAdChecker,
} = require("../auth/middleware");

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
    const newAd = await Ad.create(req.body);
    res.json(newAd);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const ad = await Ad.findByPk(req.params.id);
    if (ad) {
      await ad.destroy();
      res.status(204).send();
    } else {
      res.status(404).send("Ad not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
