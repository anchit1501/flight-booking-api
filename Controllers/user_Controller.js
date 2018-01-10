'use strict';
var mongoose=require('mongoose');
var User= mongoose.model('Users');
// var db=mongoose.connect('mongodb://localhost/gotrip');

exports.list_all_user = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.get_details=function(req,res){
    User.find({username:req.params.name,password:req.params.password},function(err,user){
        if(err)
        res.send('Error while fetching data',err);
        console.log(user);
        res.json(user);
    });
};

exports.post_details=function(req,res){
   var new_user=new User(req.body);
   new_user.save(function(err,user){
       if(err)
       res.send(err);
   res.json(user);
   });
    
};

exports.delete_user = function(req, res) {


  User.remove({name: req.params.name
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User deleted' });
  });
};
