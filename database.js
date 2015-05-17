var pg      = require('pg');
var connection = new pg.Client(process.env.DATABASE_URL)
module.exports = connection