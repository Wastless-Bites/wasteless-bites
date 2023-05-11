const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const ensureOrganization = (req, res, next) => {
  if (req.user && req.user.userType === "organization") {
    next();
  } else {
    res.status(403).send("You must be an organization to perform this action.");
  }
};

module.exports = {
  requireToken,
  ensureOrganization,
};
