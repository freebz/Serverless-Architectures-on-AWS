// 목록 9.10 비디오 컨트롤러 수정

var videoController = {
  data: {
    config: null
  },
  uiElements: {
    videoCardTemplate: null,
    videoList: null,
    loadingIndicator: null
  },
  init: function (config) {
    this.uiElements.videoCardTemplate = $('#video-template');
    this.uiElements.videoList = $('#video-list');
    this.uiElements.loadingIndicator = $('#loading-indicator');

    this.data.config = config;

    this.connectToFirebase();
  },
  addVideoToScreen: function (videoId, videoObj) {
    var newVideoElement = this.uiElements.videoCardTemplate.close().attr('id', videoId);

    newVideoElement.click(function() {
      var video = newVideoElement.find('video').get(0);

      if (newVideoElement.is('.video-playing')) {
	video.pause();
	$(video).removeAttr('controls');
      }
      else {
	$(video).attr('controls', '');
	video.play();
      }

      newVideoElement.toggleClass('video-playing');
    });
    this.updatevideoOnScreen(newVideoElement, videoObj);
    this.uiElements.videoList.prepend(newVideoElement);
  },
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
  },
  getElementForVideo: function(videoId) {
    return $('#' + videoId);
  },
  connectToFirebase: function () {
    var that = this;

    firebase.initializeApp(this.data.config.firebase);

    var isConnectedRef = firebase.database().ref('.info/connected');

    var nodeRef = firebase.database().ref('videos');

    isConnectedRef.on('value', function(snap) {
      if (snap.val() === true) {
	that.uiElements.loadingIndicator.hide();
      }
    });

    nodeRef
      .on('child_added', function (childSnapshot) {
	that.getSignedUrls(childSnapshot.val());
      });

    nodeRef
      .on('child_changed', function (childSnapshot) {
	that.updateVideoOnScreen(that.getElementForVideo(childSnapshot.key), childSnapshot.val());
      });
  },
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
};
