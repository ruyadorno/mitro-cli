var inquirer = require('inquirer');
var log = require('simple-output');

var info = require('../../package.json');
var messages = require('../messages').commands.browse;
var getChoices = require('./browse/helpers/get-choices');
var exit = require('./browse/helpers/exit');

var mitro;


// ---


var initMenuOpts = {
  secrets: messages.listSecrets,
  groups: messages.listGroups,
  exit: messages.exit
};

var initMenuPrompt = {
  type: 'list',
  name: 'initMenu',
  message: messages.initMenu,
  choices: getChoices(initMenuOpts)
};


// ---


function secretsCmd() {
}

function groupsCmd() {
}

function showInitMenu() {

  log.success(messages.welcome.replace('{{version}}', info.version));

  var commands = {
    secrets: secretsCmd,
    groups: groupsCmd,
    exit: exit
  };

  return inquirer.prompt([initMenuPrompt], function questionCallback(answer) {
    commands[answer.initMenu]();
  });

}

// ---


module.exports = function browse(_mitro) {

  mitro = _mitro;
  return showInitMenu();

};

