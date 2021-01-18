// 목록 6.4 비동기 폭포 예제

async.waterfall([
  function(callback) {
    callback(null, 'Peter', 'Sam');
  },
  function(arg1, arg2, callback) {
    callback(null, 'Serverless');
  },
  function(arg1, callback) {
    callback(null, 'Done');
  }
], function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
