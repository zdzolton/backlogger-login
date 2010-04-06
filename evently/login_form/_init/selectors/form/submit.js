function() {
  var elm = $(this);
  var username = $('input[name=username]', elm).val();
  var password = $('input[name=password]', elm).val();
  $.couch.login({
    name: username,
    password: password,
    success: function() {
      window.location = '/backlogger/_design/backlogger/index.html';
    }
  });
  return false;
}
