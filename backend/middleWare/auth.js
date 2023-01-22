const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const cookies = req.headers.cookie;

  console.log("cookies" + cookies);
  const token = cookies.split("=")[1];
  console.log("token" + token);
  if (!token) {
    res.status(404).json({ message: "no token found" });
  }
  jwt.verify(String(token), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(404).json({ message: "invalid token found" });
      console.log(err);
    }
    // req.id = user.id;
    console.log(user);
    next();
  });
};

module.exports = protect;
