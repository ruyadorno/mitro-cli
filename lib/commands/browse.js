var inquirer = require('inquirer');
var log = require('simple-output');

var info = require('../../package.json');
var messages = require('../messages').commands.browse;

var mitro;


// ---


function getChoices(opts) {

  var arr = [];

  for (var key in opts) {
    if (opts.hasOwnProperty(key)) {
      arr.push({
        name: opts[key],
        value: key
      });
    }
  }

  return arr;

}


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


function exitCmd() {

  log.info(messages.exitConfirmation);
  process.exit(0);
}

function secretsCmd() {
}

function groupsCmd() {
}

function showInitMenu() {

  log.success(messages.welcome.replace('{{version}}', info.version));

  var commands = {
    secrets: secretsCmd,
    groups: groupsCmd,
    exit: exitCmd
  };

  return inquirer.prompt([initMenuPrompt], function questionCallback(answer) {
    commands[answer.initMenu]();
  });

}

// ---


module.exports = function listAll(_mitro) {

  mitro = _mitro;
  return showInitMenu();

};

