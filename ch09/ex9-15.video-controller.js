// 목록 9.15 24-Hour Video get-Signed-Urls 함수

nodeRef
  .on('child_added', function (childSnapshot) {
    that.getSignedUrls(childSnapshot.val());
  });

getSignedUrls: function(videoObjs) {
  if (videoObjs) {
    var objectMap = $.map(videoObjs, function (video, firebaseId) {
      return {firebaseId: firebaseId, key: video.key};
    })

    var getSignedUrl = this.data.config.apiBaseUrl + '/signed-url';

    $.post(getSignedUrl, JSON.stringify(objectMap),
      function(data, status) {
	if (status === 'success') {
	  // iterate through the response and add videos to the page
	}
	else {
	  // handle error
	}

      });
  }
}
