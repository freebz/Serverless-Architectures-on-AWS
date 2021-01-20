// 목록 G.17 플러그인의 옵션

'use strict';

class Deploy {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.commands = {
      deploy: {
	lifecycleEvents: [
	  'functions'
	],
	options: {
	  function: {
	    usage: 'Specify the function you want to deploy (for example, "--function myFunction")',
	    shortcut: 'f',
	    required: true
	  }
	}
      },
    };

    this.hooks = {
      'deploy:functions': this.deployFunction.bind(this)
    }
  }

  deployFunction() {
    console.log('Deploying function: ', this.options.function);
  }
}

module.exports = Deploy;
