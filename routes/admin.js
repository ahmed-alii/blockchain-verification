var express = require('express');
var router = express.Router();

// gets admin page
router.get('/', function(req, res, next) {
    console.log("----------------------------IN ADMIN ROUTER");
    res.render('admin/admin', { title: 'admin' });

});

// gets add student page
router.get('/profile', function(req, res, next) {
    console.log("----------------------------IN profile page");

    res.render('admin/profile', { title: 'Add Student' });
});

//gets add teacher
router.get('/viewStudentRecord', function(req, res, next) {
    console.log("----------------------------IN VSR ROUTER");

    res.render('admin/viewStudentRecord', { title: 'add Teacehr' });
});















module.exports = router;
