let express = require('express');
let router = express.Router();
let connection = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BlockChain Verification' });
});


router.post('/login', function(req, res, next) {
    let queryString = "INSERT INTO `users` (`id`, `name`, `pass`, `type`) VALUES ('112233', 'ANDY', MD5('112233'), 'student');";
    connection.connect(function (error) {
        if (error){
            console.log(error);
        }
        else{
            console.log("Connected");

            connection.query(queryString, function (err, result) {
                if (err) throw err;

                connection.end();
                console.log("\n END CONNECTION");

            });

        }

    });






});


module.exports = router;
