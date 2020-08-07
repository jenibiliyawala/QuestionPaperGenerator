const express = require('express');
const dashboard = require('../../models/faculty/dashboard');

const router = express.Router();

const db = require('../../util/database');

router.post('/dashboard/getCountOfProgram', (req, res, next) => {
    dashboard.CountOfProgram(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/dashboard/getCountOfCourse', (req, res, next) => {
    dashboard.CountOfCourse(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/dashboard/getCountOfFaculty', (req, res, next) => {
    dashboard.CountOfFaculty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/dashboard/getCountOfQuestion', (req, res, next) => {
    dashboard.CountOfQuestion(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;