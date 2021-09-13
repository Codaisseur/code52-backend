// set up express
// create a route /users - GET
// start server
// try it out
const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.get("/users", async (request, response) => {
  try {
    const users = await User.findAll();
    response.send(users);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/users/:id", async (request, response) => {
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

app.get("/todolists", async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => console.log("Hey server running at 4000"));