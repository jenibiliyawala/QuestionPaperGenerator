const express = require('express');
const manageQuestion = require('../../models/faculty/managequestion');

const router = express.Router();

const db = require('../../util/database');

router.post('/manageQuestion/SelectedQuestion', (req, res, next) => {

    manageQuestion.SelectedQuestion(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/manageQuestion', (req, res, next) => {

    manageQuestion.getAllQuestion(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/manageQuestion/getAllCourse', (req, res, next) => {

    manageQuestion.getAllCourses(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/manageQuestion/insert',(req,res,next)=>{

    manageQuestion.insertQuestion(req.body,(err,row)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
            res.json(row);
        }
    })
})

router.post('/manageQuestion/update',(req,res,next)=>{
    manageQuestion.updateQuestion(req.body,(err,row)=>
    {
        if(err){
            res.send(err);
        }
        else
        {
            res.json(row);
        }
    })
})

router.post('/manageQuestion/getFacultyID', (req, res, next) => { //get one faculty id
    manageQuestion.getFacultyID(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;