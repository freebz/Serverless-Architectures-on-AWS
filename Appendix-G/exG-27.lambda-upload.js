// 목록 G.27 기본 Lambda 함수

exports.handler = function(event, context, callback) {
  var message = process.env.HELLO_SAM;
  callback(null, message);
}
