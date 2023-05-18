const router = require("express").Router();
const { models } = require("../db");
const { User } = models;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;

// Include Cloudinary configuration
require("../cloudinaryConfig");

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
        "imageUrl",
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

// Endpoint to update user's image
router.put("/:id/image", upload.single("image"), async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      res.sendStatus(404);
      return;
    }

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      user.imageUrl = result.url;

      await user.save();
      res.json(user);
    } else {
      res.status(400).send("No file uploaded.");
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id/description", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      res.sendStatus(404);
      return;
    }

    user.description = req.body.description;

    await user.save();
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
