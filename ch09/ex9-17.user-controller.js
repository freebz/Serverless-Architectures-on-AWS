// 목록 9.17 Firebase 토큰 얻기

getFirebaseToken: function(token) {
  var that = this;
  var config = this.data.config.auth0;

  var url = 'https://' + config.domain + '/delegation';

  var data = {
    id_token: token,
    scope: config.scope,
    api_type: config.api_type,
    grant_type: config.grant_type,
    target: config.target,
    client_id: config.clientId
  }

  $.post(url, data, function(data, status) {
    if (status === 'success') {
      localStorage.setItem('firebaseToken', data.id_token);
      that.authentication.resolve();
    } else {
      console.log('Could not get retrieve firebase delegation token', data, status);
      that.authentication.fail();
    }
  }, 'json');
}
