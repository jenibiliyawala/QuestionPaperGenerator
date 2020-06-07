const express = require('express');
const manageCourse = require('../../models/faculty/managecourse');

const router = express.Router();

const db = require('../../util/database');

router.get('/manageCourse', (req, res, next) => {

    manageCourse.getAllCourse(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;