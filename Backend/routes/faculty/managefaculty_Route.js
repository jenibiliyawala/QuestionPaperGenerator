const express = require('express');
const manageFaculty = require('../../models/faculty/managefaculty');

const router = express.Router();
var multer = require('multer');
var path = require('path');
const db = require('../../util/database');

router.get('/manageFaculty', (req, res, next) => {

    manageFaculty.getAllFaculty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/manageFaculty/insert', (req, res, next) => {
    manageFaculty.insertFaculty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
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
router.post('/manageFaculty/uploadImage', fileupload, (req, res, next) => {
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


// update faculty status

router.post('/manageFaculty/update', (req, res, next) => {
    manageFaculty.updateFacultyStatus(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/manageFaculty/blockbyfaculty',(req, res, next) => {
    manageFaculty.blockedbyfaculty(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


module.exports = router;