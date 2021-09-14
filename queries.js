const User = require("./models").user;
const TodoList = require("./models").todoList
const TodoItem = require("./models").todoItem
const Tags = require("./models").tag

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

// getTodoListWithUser().then(data => console.log(data))

const getItemsWithTags = async () => {
  try {
    const items = await TodoItem.findAll({include: Tags})
    return items.map(item => item.get({plain: true}))

  } catch (e){
    console.log(e.message)
  }
}

getItemsWithTags().then(data => console.log(data))