const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "../database/data/mydb.sqlite3"
    }
  });


module.exports = knex;