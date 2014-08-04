var inquirer = require('inquirer');
var log = require('simple-output');

var info = require('../../package.json');
var messages = require('../messages').commands.browse;
var getChoices = require('./browse/helpers/get-choices');
var resetAPI = require('./browse/helpers/resetAPI');

var mitro;


// ---


var isGreetinMsgDisplayed;

var initMenuOpts = {
  secrets: messages.listSecretsOpt,
  groups: messages.listGroupsOpt,
  exit: messages.exit
};

var initMenuPrompt = {
  type: 'list',
  name: 'initMenu',
  message: messages.initMenu,
  choices: getChoices(initMenuOpts)
};


// ---


function showInitMenu() {

  if (!isGreetinMsgDisplayed) {
    log.success(messages.welcome.replace('{{version}}', info.version));
    isGreetinMsgDisplayed = true;
  }

  module.exports.commands = {
    secrets: require('./browse/list-secrets'),
    groups: require('./browse/list-groups'),
    exit: require('./browse/helpers/exit')
  };

  return inquirer.prompt([initMenuPrompt], function questionCallback(answer) {
    module.exports.commands[answer.initMenu](mitro);
  });

}

// ---


module.exports = function browse(_mitro) {

  mitro = _mitro;

  resetAPI();

  return showInitMenu();

};

