const router = require("express").Router();
const { models } = require("../db");
const { User } = models;

// Get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Get user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: [
        "id",
        "username",
        "email",
        "description",
        "address",
        "userType",
      ],
    });
    if (!user) {
      res.sendStatus(404);
      return;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
