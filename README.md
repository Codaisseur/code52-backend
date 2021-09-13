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
