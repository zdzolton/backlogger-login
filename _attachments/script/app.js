// $.couch.app() loads the design document from the server and then calls our application.
$.couch.app(function(app) {
  
  $('#login_form').evently(app.ddoc.evently.login_form, app);
  
});
