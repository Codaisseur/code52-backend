const User = require("./models").user;
const TodoList = require("./models").todoList

const getAllUsers = async () => {
  try {
    const users = await User.findAll(); // findByPk() => id, findOne()
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllUsers();

const getTodoListWithUser = async () => {
  try {
    const lists = await TodoList.findAll({include: User})
    return lists.map(list => list.get({plain: true}))
  } catch (e){
    console.log(e.message)
  }
}

getTodoListWithUser().then(data => console.log(data))
