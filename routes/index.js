var express = require('express');
var router = express.Router();
var userModel = require("./users")

// router.get('/',function(req,res){
//   req.session.ban = false;
//   res.render('index')
// })

// router.get('/see', function(req,res){
//   console.log(req.session)
//   res.send(req.session)
// })

// router.get('/remove', function(req,res){
//   req.session.destroy(function(err){
//     if (err) throw err;
//     res.send("ban removed")
//   })
// });

router.get('/cookie',function(req,res){
  const harshit = {name: "harshit",
    age: 21, prof: "designer"}
  res.cookie('userdata',harshit)
  res.send('check the cookies')
})

router.get('/getcookie', function(req,res){
  res.send(req.cookies)
})

router.get('/delete',function(req,res){
  res.clearCookie('userdata')
  res.send('clear yes')
})

module.exports = router;
