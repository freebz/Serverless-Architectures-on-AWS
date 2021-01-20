// 목록 9.12 안전한 URL 가져오기

updateVideoOnScreen: function(videoElement, videoObj) {
  if (!videoObj) {
    return;
  }

  if (videoObj.transcoding) {
    videoElement.find('video').hide();
    videoElement.find('.transcoding-indicator').show();
  } else {
    videoElement.find('video').show();
    videoElement.find('.transcoding-indicator').hide();

    var getSignedUrl = this.data.config.apiBaseUrl
	+ '/signed-url?key=' + encodeURI(videoObj.key);

    $.get(getSignedUrl, function(data, result) {
      if (result === 'success' && data.url) {
	videoElement.find('video').attr('src', data.url);
      }
    })
  }
}
