var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject:{
      type:String,
      required:true
  },
  message:{
      type:String,
      min:20,
      max:400,
      required:true
  }
});
