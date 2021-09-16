const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", authMiddleware, async (request, response, next) => {
  try {
    console.log("Whos making this request???", request.user);
    const users = await User.findAll();
    response.send(users);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/signup", async (req, res, next) => {
  // /users/signup
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      res.status(400).send("Missing parameters");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res.send(newUser);
    }
  } catch (e) {
    console.log(e.message);
    next(e); // passes the error to express (error handler)
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Missing parametersa");
    }
    // Check if this person/user exists.
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(400).send("Incorrect parameters");
    }
    // we have the user.
    const passwordsMatch = bcrypt.compareSync(password, user.password); // true || false

    if (passwordsMatch) {
      // token
      const token = toJWT({ userId: user.id });
      return res.send({ message: "Congrats you're logged in!", token });
    } else {
      return res.status(400).send("Incorrect password");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", authMiddleware, async (request, response) => {
  // GET - /users/:id
  try {
    // get id from params
    const userId = request.params.id;
    console.log("user id?", userId);
    // use model to get this users
    const oneUser = await User.findByPk(userId);
    console.log("is this who we are looking for?", oneUser);
    // respond with user
    if (!oneUser) {
      response.status(404).send("User with that id not found");
    } else {
      const { password, ...restOfUser } = oneUser.dataValues;
      response.send(restOfUser);
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
