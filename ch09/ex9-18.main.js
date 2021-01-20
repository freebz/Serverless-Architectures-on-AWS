// 목록 9.18 main.js 파일

(function(){
  $(document).ready(function(){
    userController.init(configConstants)
      .then(function() {
	videoController.init(configConstants);
	uploadController.init(configConstants);
      }
    );
  });
}());
