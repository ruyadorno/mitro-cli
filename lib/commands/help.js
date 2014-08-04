var log = require('simple-output');

var info = require('../../package.json');
var messages = require('../messages');


// ---


module.exports = function help() {
  log.info(messages.commands.browse.welcome.replace('{{version}}', info.version));
  log.message(
    'This is a command-line interface for managing your Mitro passwords.\n\n' +
    'Available options:\n'+
    '--server_host    Defaults to: www.mitro.co\n' +
    '--server_port    Defaults to: 443\n' +
    '--uid            * Required\n' +
    '--password       * Required\n\n' +
    'For now the only commands available are the following:\n\n' +
    'browse           Starts the CLI interactive mode\n' +
    'list             List all your secrets and groups\n' +
    'listsecrets      List all your secrets\n' +
    'listgroups       List all your groups\n' +
    'show             Shows the content of a given secret id\n\n' +
    'This project is currently under development, please visit our Github repo\n' +
    'to submit any problems, contributions or simply follow the progress:\n\n' +
    'https://github.com/ruyadorno/mitro-cli\n'
  );
};

