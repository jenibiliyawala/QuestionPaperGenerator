var user = require("../models/user_model");
var express = require("express");
var router = express.Router();
var jwt = require('jsonwebtoken')
var response = require('../controller/response');

router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    user.getUserByID(req.params.id, function (err, rows) {
      if (err) {
        res.send(response('Error', 403, null, err, null, null));
      } else {
        res.send(response('Success', 200, rows, null, null, null));
      }
    });
  } else {
    user.getAllUser(function (err, rows) {
      if (err) {
        res.send(response('Error', 403, null, err, null, null));
      } else {
        res.send(response('Success', 200, rows, null, null, null));
      }
    });
  }
});

router.post('/', function (req, res, next) {
  user.userLogin(req.body, function (err, rows) {
    if (err) {
      res.send(response('Error', 403, null, err, 'Login Un-Successfull', null))
    } else {
      if (rows.length === 0) {
        res.send(response('Error', 401, [], null, 'Login Un-Successfull', null))
      } else {
          da=JSON.stringify(rows);
          global.uid=JSON.parse(da)[0].uid;
          global.uname=JSON.parse(da)[0].uname;
        
        const token = jwt.sign({exp: (Date.now() / 1000) + 1296000,data: 'hello'}, 'SenProject');
        res.send(response('Success', 200, token, null, 'Login Successfull', null))
      }
    }
  });
});



router.post('/validate',function(req,res,next){
  const token = req.body.token;

  jwt.verify(token, 'SenProject',function(err,data){
    if (err){
      res.send(response('Success', 200, false, null, 'Token is Expired', null))
    }else{
      res.send(response('Success', 200, true, null, 'Token is Valid', null))
    }
  
  })
})

module.exports = router;