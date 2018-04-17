var express = require('express');
var router = express.Router();
var decision = require('./decisiontree');

/* GET home page. */
router.get('/', function(req, res, next) {
  var gre = 320;
  var toefl = 105;
  var gpa = 2;
  

  res.render('index', { title: 'Decision Tree', Gre: gre, Toefl: toefl, Gpa: gpa,Admit: decision.predictDecision(gre, toefl, gpa)});
});

module.exports = router;
