const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      include: [{ model: TodoList, include: [{ model: TodoItem }] }],
    }); // findByPk() => id, findOne()
    const parsedUsers = users.map(u => u.toJSON());
    console.log(parsedUsers[0].todoLists);
  } catch (e) {
    console.log(e.message);
  }
};

getAllUsers();

const getAllListsWithItems = async () => {
  try {
    const lists = await TodoList.findAll({
      include: [{ model: TodoItem }],
    }); // findByPk() => id, findOne()
    const parsedLists = lists.map(u => u.toJSON());
    console.log(parsedLists);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllListsWithItems();
