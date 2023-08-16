const { HttpStatusCode } = require("axios");
const jwt = require("jsonwebtoken");

const verifyAdminToken = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    // VERYFY ADMID PRIVILEDGE
    if (req.user.admin) {
      next();
    } else {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ error: "You are not authorized to perform this operation!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { verifyUserToken, verifyAdminToken };
