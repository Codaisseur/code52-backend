const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  // console.log("I'm going through the middleware!!");
  const authHeader = req.headers.authorization?.split(" ");
  console.log("did I get the header correctly", authHeader);

  if (authHeader && authHeader[1]) {
    try {
      const data = toData(authHeader[1]);
      console.log("data?", data); // data === { userId: 4 }
      // find the owner of the token
      const thisUser = await User.findByPk(data.userId);

      req.user = thisUser;
      next(); // Let him in!
    } catch (e) {
      res.status(401).send("Token invalid");
    }
  } else {
    res.status(401).send("Please provide a token in the auth header");
  }
}

module.exports = auth;
