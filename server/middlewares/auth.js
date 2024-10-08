const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  

  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  //verification of token
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userid = decoded.id;
    next();
  } catch (err) {
    res.status(500).json({
      error: err.message.match("jwt expired")
        ? "Token expires"
        : "Server error",
    });
  }
};

module.exports = authenticate;
