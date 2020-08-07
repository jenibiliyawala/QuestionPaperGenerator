const express = require('express');
const manageProgram = require('../../models/faculty/manageprogram');

const router = express.Router();

const db = require('../../util/database');

router.post('/SelectedProgram', (req, res, next) => {

    manageProgram.SelectedProgram(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});


router.get('/manageProgram', (req, res, next) => {

    manageProgram.getAllProgram(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

router.post('/manageProgram/insert',(req,res,next)=>{
    manageProgram.insertProgram(req.body,(err,row)=>
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
router.post('/manageProgram/update',(req,res,next)=>{
    manageProgram.updateProgram(req.body,(err,row)=>
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
router.post('/manageProgram/getFacultyID', (req, res, next) => { //get one faculty id
    manageProgram.getFacultyID(req.body, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;