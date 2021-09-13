const User = require("./models").user;

const getAllUsers = async () => {
  try {
    const users = await User.findAll(); // findByPk() => id, findOne()
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};

getAllUsers();
