var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var AdminLoginSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min:6,
    max:32
  }
});

module.exports = mongoose.model('Admins', AdminLoginSchema);



