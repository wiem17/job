const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove "Bearer " from the beginning of the token
      token = token.slice(7);
      verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          console.log(err);
          return res.send("invalid token");
        } else {
          // Attach the decoded token to the request object
          req.user = decoded;
          next();
        }
      });
    } else {
      return res.send("access denied! user not authorized");
    }
  },
};
