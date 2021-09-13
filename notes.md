## Backend

### Setup:

1. Install the tools:

- Sequelize.
- Sequelize-cli.
- pg.

2. Init sequelize: `npx sequelize-cli init`

3. Modify config.json (to point to our new database).

4. Modify models/index.js (later).

## Creating a model

Command:
`npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string`
