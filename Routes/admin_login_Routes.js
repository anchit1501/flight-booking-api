"use strict";
module.exports = function(app) {
  var adminlogin = require("../Controllers/admin_login_Controller");
var user = require("../Controllers/user_Controller")
  // Admin Routes
  app.route("/admin")
    .post(adminlogin.post_details);

  app.route("/admin/all")
    .get(adminlogin.list_all_admin);
  
  app.route("/admin/:name")
  .delete(adminlogin.delete_admin);

    app.route("/admin/login/:name/:password")
    .get(adminlogin.get_details)

//User Routes
app.route("/user")
    .post(user.post_details);

  app.route("/user/all")
    .get(user.list_all_user);
    app.route("/user/login/:name/:password")
    .get(user.get_details);
};
