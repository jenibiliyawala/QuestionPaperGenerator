const express = require('express');
const manageCourse = require('../../models/faculty/managecourse');
const db12 = require('../../util/database');


const router = express.Router();

const db = require('../../util/database');

router.post('/SelectedCourse', (req, res, next) => {

    manageCourse.SelectedCourse(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


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

router.post('/getAllProgram', (req, res, next) => {

    manageCourse.getAllPrograms(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/manageCourse/insert',(req,res,next)=>{

  //  var email1=db12.query('SELECT FacultyID FROM tblfaculty WHERE Email=?',[req.body.email],callback);
  //var email1=req.body.email;
    manageCourse.insertCourse(req.body,(err,row)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
           // console.log(req.body);
            res.json(row);
        }
    })
})
router.post('/manageCourse/update',(req,res,next)=>{
    manageCourse.updateCourse(req.body,(err,row)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
           // console.log(req.body);
            res.json(row);
        }
    })
})
router.post('/manageCourse/getFacultyID', (req, res, next) => { //get one faculty id
    manageCourse.getFacultyID(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;