// 목록 G.20 간단한 REST API: handler.js

'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello,
       the current time is ${new Date().toTimeString()}.`
    }),
  };

  callback(null, response);
};
