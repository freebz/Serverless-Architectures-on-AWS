// 목록 G.11 메일전송 함수 비지니스 로직

class Users {
  constructor(db, mailer) {
    this.db = db;
    this.mailer = mailer;
  }

  save(email, callback) {
    const user = {
      email: email,
      created_at: Date.now()
    }

    this.db.saveUser(user, function (err) {
      if (err) {
	callback(err);
      } else {
	this.mailer.sendWelcomeEmail(email);
	callback();
      }
    });
  }
}
