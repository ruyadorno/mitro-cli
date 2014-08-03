var log = require('simple-output');

var messages = require('../../../messages').commands.browse;


// --


module.exports = function exit() {

  log.info(messages.exitConfirmation);

  process.exit(0);

};

