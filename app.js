var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;
  mongoose = require('mongoose'),
  Admin = require('./Models/admin_login_Model'),
  User=require('./Models/user_Model'),
   //created model loading here
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gotrip');
//var db=mongoose.connect('mongodb://mongosql.westus2.cloudapp.azure.com:27017/gotrip',{user:'gotrip',pass:'Welcome123$'});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./Routes/admin_login_Routes'); //importing route
routes(app); //register the route


app.listen(port);
app.get
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('todo list RESTful API server started on: ' + port);
