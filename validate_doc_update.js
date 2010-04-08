function(newDoc, oldDoc, userCtx) {
  log(JSON.stringify(userCtx));
  if (userCtx.roles.indexOf('_admin') == -1) {
    throw({ forbidden: 'Only admin may save documents' });
  }
}
