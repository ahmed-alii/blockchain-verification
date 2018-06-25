var express = require('express');
var router = express.Router();

//Student Main Page
router.get('/', function(req, res, next) {
    res.render('student/student', { title: 'Student' });
});

//Students view Grades
router.get('/viewGrades', function(req, res, next) {
    res.render('student/viewGrades', { title: 'Student view Grades' });
});

module.exports = router;
