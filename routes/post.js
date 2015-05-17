var express = require('express');
var router = express.Router();

var connection = require('../database')

function query(query,cb){
  connection.query(query, function(err, rows) {
    if (err) throw err;
    cb(rows)
  })
}

router.get('/', function(req, res, next) {
  
  res.render('post')
  
});

router.post('/', function(req, res, next) {
  
  console.log(req.body)
  query('INSERT INTO scams (title, description) VALUES ("'+req.body.title+'", "'+req.body.description+'")', function(){
    res.redirect('/')
  })
  
});

module.exports = router;
