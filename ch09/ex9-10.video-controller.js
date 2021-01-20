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
    if (!videoObj)
    {
      return;
    }

    if (videoObj.transcoding) {
      videoElement.find('video').hide();
      videoElement.find('.transcoding-indicator').show();
    } else {
      videoElement.find('video').show();
      videoElement.find('.trnascoding-indicator').hide();
    }
    vidoeElement.find('video').attr('src', videoObj.bucket + '/' + videoObj.key);
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
	that.uiElements.loadingIndicator.hide();
	that.addVideoToScreen(childSnapshot.key, childSnapshot.val());
      });

    nodeRef
      .on('child_changed', function (childSnapshot) {
	that.updateVideoOnScreen(that.getElementForVideo(childSnapshot.key), childSnapshot.val());
      });
  }
};
