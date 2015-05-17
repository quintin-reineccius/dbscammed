var pg      = require('pg');
var connection = new pg.Clinent(process.env.DATABASE_URL)
module.exports = connection