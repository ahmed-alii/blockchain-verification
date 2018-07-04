let express = require('express');
let router = express.Router();
var passport = require("passport");
let connection = require('../database');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'BlockChain Verification'});
});


// router.post("/login", passport.authenticate("local",
//     {
//         successRedirect: "back",
//         failureRedirect: "/",
//     }), function (req, res) {
//
// });



router.post('/login', passport.authenticate('local', {

        failureRedirect: '/login'}),

    (req, res) => {
        if (req.user.type === "admin") {
            res.redirect('admin', {data: req.user});
        }
        if (req.user.type === "student") {
            // console.log(req.user);
            res.redirect('student/'+req.user.id);
        }
    });

// router.post('/login',
//     passport.authenticate('local'),
//     function(req, res) {
//     console.log(req.user);
//         if(req.user){
//             if(req.user.type === "admin"){
//                 res.redirect("admin");
//             }
//             else{
//                 res.redirect("student");
//             }
//         }
//     });



// router.get('/login', function(req, res, next) {
//
//     passport.authenticate('local', function(err, user) {
//
//         if (err) {
//             console.log(err);
//             return res.redirect("/")
//         }
//
//         if (!user)
//         {
//             return res.redirect('/login');
//         }
//
//
//         req.login (user, function(err) {
//             console.log("REQ>LOGIN");
//
//             if (err) { return next(err); }
//
//             return res.redirect('/users/' + user.username);
//         });
//
//     })(req, res, next);
// });


module.exports = router;
