// 목록 10.3 Step Functions을 사용한 실행 설명

var AWS = require('aws-sdk');
var stepFunctions = new AWS.StepFunctions();

var params = {
  executionArn: '<STATE MACHINE EXECUTION ARN>'
};

stepFunctions.describeExecution(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
}
