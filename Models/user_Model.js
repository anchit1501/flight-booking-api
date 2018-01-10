var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  username: {
  type: String,
  required:true
  },
	email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
	details:{
	firstname:{type:String},
	lastname:{type:String},
	middlename:String,
	mobile:{type:Number},
    },
	
    address:{
		address_line1:{type:String},
		address_line2:String,
		city:{type:String},
		state:{type:String},
		pincode:{type:Number},
	}

    });


module.exports = mongoose.model('Users', UserSchema);