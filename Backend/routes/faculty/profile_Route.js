const express = require('express');
const profile = require('../../models/faculty/profile');

const router = express.Router();

const db = require('../../util/database');

router.post('/profile', (req, res, next) => {
    profile.userDetail(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;