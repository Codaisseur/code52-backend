const jwt = require("jsonwebtoken");

const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

// data => userId
// secret => jumbler
// expiration => how long is this valid

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" }); // create a token
}

function toData(token) {
  return jwt.verify(token, secret); // check a token to see if its valid
}

module.exports = { toJWT, toData };
