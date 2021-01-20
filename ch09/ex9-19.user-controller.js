// 목록 9.19 deferredAuthentication 함수

deferredAuthentication: function() {
  var that = this;
  this.authentication = $.Deferred();
  var idToken = localStorage.getItem('userToken');

  if (idToken) {
    this.configureAuthenticatedRequests();
    this.data.auth0Lock.getProfile(idToken, function(err, profile) {
      if (err) {
	return alert('There was an error getting the profile: ' +
		     err.message);
      }
      that.showUserAuthenticationDetails(profile);
    });

    var firebaseToken = localStorage.getItem('firebaseToken');

    if (firebaseToken) {
      this.authentication.resolve();
    } else {
      this.getFirebaseToken(idToken);
    }
  }
  return this.authentication;
}
