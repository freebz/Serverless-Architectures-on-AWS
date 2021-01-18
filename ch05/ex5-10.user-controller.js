// 목록 5.10 Show Profile 클릭 이벤트 핸들러

this.uiElements.profileButton.click(function (e) {
    var url = that.data.config.apiBaseUrl + '/user-profile';
    $.get(url, function (data, status) {
	alert(JSON.stringify(data));
    })
});
