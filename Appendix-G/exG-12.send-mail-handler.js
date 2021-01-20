// 목록 G.12 메일 전송 핸들러 함수

const db = require('db').connect();
const mailer = require('mailer');
const users = require('users')(db, mailer);

module.exports.saveUser = (event, context, callback) => {
  users.save(event.email, callback);
};
