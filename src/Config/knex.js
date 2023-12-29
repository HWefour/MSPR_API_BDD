const knex = require("knex");

const connectedKnex  = knex ({
    client : "sqlite3",
    connection : {
        filename : "MSPR_BDD.sqlite3"
    }
}) 

module.exports = connectedKnex;