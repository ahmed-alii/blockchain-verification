var express = require('express');
var router = express.Router();

//Student Main Page
router.get('/:id', function(req, res, next) {
    console.log(req.user);
    res.render('student/student', { user: req.user , title: "Student"});
});

//Students view Grades
router.get('/transcript', function(req, res, next) {
    res.render('student/transcript', { title: 'Student view Grades' });
});

router.get('/profile', function(req, res, next) {
    res.render('student/profile', { title: 'Student view Grades' });
});

module.exports = router;
