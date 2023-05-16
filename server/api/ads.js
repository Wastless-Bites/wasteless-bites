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

const requireOrganization = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("No authorization token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const user = await User.findByToken(token);
    if (user.userType !== "organization") {
      return res.status(403).send("User is not an organization");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

router.post("/", requireOrganization, async (req, res, next) => {
  try {
    console.log(req.body);
    const newAd = await Ad.create(req.body);
    res.json(newAd);
  } catch (error) {
    next(error);
  }
});

const requireAdOwner = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("No authorization token provided");
  }
  const token = authHeader.split(" ")[1];
  try {
    const user = await User.findByToken(token);
    if (user.isAdmin) {
      next();
      return;
    }
    const ad = await Ad.findOne({ where: { id: req.params.id } });
    if (!ad) {
      return res.status(404).send("Ad not found");
    }
    if (ad.organizationId !== user.id) {
      return res.status(403).send("User is not the owner of the ad");
    }
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

router.delete("/:id", requireAdOwner, async (req, res, next) => {
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

router.patch("/:id/coming", async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  try {
    const user = await User.findByToken(token);
    const ad = await Ad.findByPk(req.params.id, {
      include: [{ model: User, as: "organization" }],
    });
    if (ad) {
      if (ad.comingUserIds.includes(user.id)) {
        const error = new Error("User is already coming!");
        error.status = 400;
        throw error;
      }
      ad.coming = ad.coming + 1;
      ad.comingUserIds.push(user.id);
      await ad.save({
        fields: ["coming", "comingUserIds"],
      });
      res.json(ad);
    } else {
      const error = new Error("Ad not found");
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
