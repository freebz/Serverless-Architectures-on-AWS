// 목록 G.22 IoT event: handler.js

module.exports.log = (event, context, callback) => {
  console.log(event);
  callback(null, {});
};
