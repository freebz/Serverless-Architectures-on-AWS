// 목록 G.24 Scheduled: handler.js

module.exports.run = (event, context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};
