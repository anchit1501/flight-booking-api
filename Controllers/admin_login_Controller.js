'use strict';
var mongoose=require('mongoose');
var Admin= mongoose.model('Admins');
// var db=mongoose.connect('mongodb://localhost/gotrip');

exports.list_all_admin = function(req, res) {
  Admin.find({}, function(err, admin) {
  console.log('Hello');
      console.log(admin);
   if (err)
      res.send(err);
      console.log('Hello');
      console.log(admin);
    res.send(admin);
  });
};


exports.get_details=function(req,res){
    Admin.find({name:req.params.name,password:req.params.password},function(err,admin){
        if(err)
        res.send('Error while fetching data',err);
        console.log(admin);
        res.json(admin);
    });
};

exports.post_details=function(req,res){
   var new_admin=new Admin(req.body);
   new_admin.save(function(err,admin){
       if(err)
       res.send(err);
   res.json(admin);
   });
    
};

exports.delete_admin = function(req, res) {


  Admin.remove({name: req.params.name
  }, function(err, admin) {
    if (err)
      res.send(err);
    res.json({ message: 'Admin deleted' });
  });
};
