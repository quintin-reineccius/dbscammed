var express = require('express');
var router = express.Router();

var connection = require('../database')

function query(query,cb){
  connection.query(query, function(err, result) {
    if (err) throw err;
    cb(result.rows)
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  
  query('SELECT * FROM scams ORDER BY id DESC LIMIT 10', function(rows) {
    console.log(rows)
    res.render('index', { rows: rows });
  });

  
});

module.exports = router;
