var express = require('express');
var router = express.Router();
var url = require('url');

var connection = require('../database')

function query(query,cb){
  connection.query(query, function(err, rows) {
    if (err) throw err;
    cb(rows)
  })
}

router.get('/', function(req, res, next) {
  
  var url_parts = url.parse(req.url, true);
  var getvars = url_parts.query;
  query('SELECT * FROM scams WHERE title LIKE "%'+getvars.search+'%"', function(rows){
    
    res.render('index', {rows: rows})
  })
  
});

module.exports = router;
