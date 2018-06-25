var express = require('express');
var router = express.Router();

// gets admin page
router.get('/', function(req, res, next) {
    res.render('admin/admin', { title: 'admin' });
});

// gets add student page
router.get('/addStudent', function(req, res, next) {
    res.render('admin/addStudent', { title: 'Add Student' });
});

//gets add teacher
router.get('/addTeacher', function(req, res, next) {
    res.render('admin/addTeacher', { title: 'add Teacehr' });
});

//manage Courses
router.get('/manageCourse', function(req, res, next) {
    res.render('admin/manageCourse', { title: 'manage Courses' });
});

//manage Registrations
router.get('/manageRegistration', function(req, res, next) {
    res.render('admin/manageRegistration', { title: 'manageRegistrations' });
});















module.exports = router;
