## Backend

### Setup:

1. Install the tools:

- `sequelize`
- `sequelize-cli`
- `pg` (driver so sequelize knows how to talk to postgres)

2. Init sequelize: `npx sequelize-cli init`

3. Modify config.json (to point to our new database).

4. Modify models/index.js (later).

## Creating a model

Command:
`npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string`

## Running the migrations so the tables get created:

Run migrations: `npx sequelize-cli db:migrate`
Undo migrations: `npx sequelize-cli db:migrate:undo:all`

## Seed files

Create a seed file: `npx sequelize-cli seed:generate --name some-users`
Run seed files `npx sequelize-cli db:seed:all`

## Adding relations

Create realations file: `npx sequelize-cli migration:generate --name set-up-relations`

0. Undo all the migrations
1. Create a new migration to add relation
2. Edit the recently created migration file to add new column
2.1 Edit Seeds to add foreignKey
3. Migrate and check the relation (Postico, DBeaver)
4. Add the relations to the models (if you skip this step, query breaks)
5. Query relations (use include)

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
  },
};
```

# REST - REpresentational State Transfer

- 3 main principles:

* Operations as HTTP methods
* Respond with appropriate HTTP status codes
* Use clean and meaningful URLs (endpoints).

### Http methods:

GET, DELETE, POST, PUT, PATCH  
Read, delete, Create, update, update

PATCH => { email: 'sdasd' }, PUT => { name: 'matias', email: 'sasds', ... }

### Http status codes:

200... All went good => All good
300... Redirect => no longer here
400... Client/user error => you screwed up.
500... Server Error => I screwed up.

200 - OK

400 - Bad request
401 - Unauthorized
403 - Forbidden
404 - Not found

500 - Internal server error

### Clean and meaningful urls:

GET - /getUsers
GET - /getLists
GET - /getUsersAndLists
GET - /listById/:id
POST - /createAUser

GET - /users
POST - /users
GET - /users/:id
PATCH - /user/:id

## Sending data on the request.

GET + DELETE => We can't send any data with these requests.
=> We can send url params (`/user/:id`).

Body of the request => payload.

POST - `/users` = body => { name: 'wouter', email: 'ásdasdasd', ..., }

