// 목록 G.15 serverless 플러그인 작성

'use strict';

class MyPlugin {
  constructor() {
    this.commands = {
      deploy: {
	lifecycleEvents: [
	  'resource',
	  'functions'
	]
      },
    };
  }
}

module.exports = MyPlugin;
