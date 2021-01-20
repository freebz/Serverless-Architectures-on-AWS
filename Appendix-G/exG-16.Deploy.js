// 목록 G.16 serverless 플러그인의 후크

'use strict';

class Deploy {
  constructor() {
    this.commands = {
      deploy: {
	lifecycleEvents: [
	  'resource',
	  'functions'
	]
      },
    };

    this.hooks = {
      'before:deply:resource': this.beforeDeployResources,
      'deploy:resource': this.deployResources,
      'after:deploy:functions': this.afterDeployFunctions
    };
  }

  beforeDeployResources() {
    console.log('Before Deploy Resource');
  }

  deployResources() {
    console.log('Deploy Resource');
  }

  afterDeployFunctions() {
    console.log('After Deploy functions');
  }
}

module.exports = Deploy;
