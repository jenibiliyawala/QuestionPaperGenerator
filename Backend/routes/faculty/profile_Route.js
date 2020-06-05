const express = require('express');
const profile = require('../../models/faculty/profile');
const signin = require('../../models/faculty/signin');
//start
var multer = require('multer');
var path = require('path');
//end

const router = express.Router();

const db = require('../../util/database');

//to get profile details
router.post('/profile', (req, res, next) => {
    profile.userDetail(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
            // res.end();
        }
    });
});

//To update profile details
router.post('/profile/updateProfile', (req, res, next) => {
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
                    profile.updateProfile(req.body, (err, row) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.json(row);
                        }
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

//start
const fileFilter = (req, file, cb) => {

    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/images/Faculty');
    },
    filename: (req, file, cb) => {
        var filename = file.originalname;
        var ext = filename.substring(filename.indexOf('.'));
        cb(null, 'Faculty' + '_' + Date.now() + ext);
    }
});
const fileupload = (multer({ storage: fileStorage, fileFilter: fileFilter }).single('file'));
router.post('/profile/uploadImage', fileupload, (req, res, next) => {
    const image = req.file;
    if (!image) {
        res.send({
            result: -1
        });
    }
    else {
        res.send({
            result: 1,
            name: image.filename
        });   
    };
});
//end

module.exports = router;