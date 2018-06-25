var express = require('express');
var router = express.Router();

//gets teacher main page
router.get('/', function(req, res, next) {
    res.render('teacher/teacher', { title: 'teacher' });
});

//teacher add grades page
router.get('/manageGrades', function(req, res, next) {
    res.render('teacher/manageGrades', { title: 'teacher manages grades' });
});

module.exports = router;
