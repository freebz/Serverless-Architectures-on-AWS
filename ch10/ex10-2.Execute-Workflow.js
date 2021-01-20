// 목록 10.2 Step Functions 상태 머신 실행

var AWS = require('aws-sdk');
var stepFunctions = new AWS.StepFunction();

var params = {
  stateMachineArn: '<STATE MACHINE ARN>',
  input: "{'bucket':'serverless-image-transform', 'key':'image.png'}",
  name: 'MyTest'
};

stepFunctions.startExecution(params, function(err, data) {
  if (err) {
    callback(err);
  }
  else {
    callback(null, 'Step Functions executionARN: ' + data.executionArn);
  }
});
