const express = require('express');
const signin = require('../../models/faculty/signIn');
const forgotPassword = require('../../models/faculty/emailverify');


const router = express.Router();

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

router.post("/ForgotPassword", function (req, res, next) {
    signin.ForgotPassword(req.body, function (err, row) {
        if (err) {
            res.send(err);
        }
        else
        {
            var numrows = row.length;
            if (numrows == 0) {
                res.send({
                    result: -1
                });
            }
            else
            {
                const to = row[0].Email;
                const subject = 'Forgot Password'
                const message = '<h3>Hello Student,\nYour password is: </h3>'+'<b>'+row[0]['Password']
                const mailObj = {to,subject,message}
                forgotPassword.sendMail(mailObj)
                res.send({
                    result: 1
                });
            }
        }
               
    });
});


module.exports = router;