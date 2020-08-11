const express = require('express');
const generatequestionpaper = require('../../models/faculty/generatequestionpaper');

const router = express.Router();

const db = require('../../util/database');

router.post('/GQPGetAllCourse', (req, res, next) => {
    generatequestionpaper.GetAllCourses(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/GQPGetQuestions', (req, res, next) => {
    generatequestionpaper.GetQuestions(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

/*router.post('/generatequestionpaper/getCountOfFaculty', (req, res, next) => {
    generatequestionpaper.CountOfFaculty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});*/

/*router.post('/generatequestionpaper/getCountOfQuestion', (req, res, next) => {
    generatequestionpaper.CountOfQuestion(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});*/

module.exports = router;