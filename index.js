const express = require("express");
const app = express();
const PORT = 4000;
const userRouter = require("./routers/user");
const listRouter = require("./routers/todoList");

// register middlewares
app.use(express.json()); // body-parser. => middleware.

// register routers
app.use("/users", userRouter);
app.use("/todoLists", listRouter); // GET - /lists

// start the app.
app.listen(PORT, () => console.log("Hey server running at 4000"));
