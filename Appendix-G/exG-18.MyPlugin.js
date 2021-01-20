// 목록 G.18 글로벌 서비스 설정 접근

'use strict';

class MyPlugin {
  consturctor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.commands = {
      log: {
	lifecycleEvents: [
	  'serverless'
	],
      },
    };

    this.hooks = {
      'log:serverless': this.logServerless.bind(this)
    }
  }

  logServerless() {
    console.log('Serverless instance: ', this.serverless);
  }
}

module.exports = MyPlugin;
