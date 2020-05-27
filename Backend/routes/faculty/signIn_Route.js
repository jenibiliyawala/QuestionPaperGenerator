const express = require('express');
const signin = require('../../models/faculty/signIn');

const router = express.Router();

const db = require('../../util/database');

router.post('/signin', (req, res, next) => {

    signin.isauth1(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            var numrows = row.length;

            if (numrows == 0) {
                res.send({
                    result: -1
                });
            }
            else {
                let facultyStatus = row[0].Status;
                if(facultyStatus==0){
                    res.send({
                        result: 1
                    }); 
                }
                else{
                    res.send({
                        result: -2
                    });
                }
            }
        }
    });
});

module.exports = router;