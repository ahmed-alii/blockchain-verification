var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BlockChain Verification' });
});


router.post('/login', function(req, res, next) {
    if(req.body.userid === "123"){
        res.redirect("admin");
    }
    else{
        res.redirect("student");
    }
});


module.exports = router;
