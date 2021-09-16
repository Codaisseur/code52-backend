const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    console.log("inside the router! :)");
    const users = await User.findAll();
    response.send(users);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // if (!email || !password || !name) {
    // res.status(400).send("Missing parameters");
    // } else {
    const newUser = await User.create({ name, email, password });
    res.send(newUser);
    // }
  } catch (e) {
    console.log(e.message);
    next(e); // passes the error to express (error handler)
  }
});

router.get("/:id", async (request, response) => {
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
