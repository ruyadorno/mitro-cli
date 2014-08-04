var inquirer = require('inquirer');

var help = require('../help');
var messages = require('../../messages').commands.browse;
var getChoices = require('./helpers/get-choices');

var mitro;


// ---


var getSecretOpts = {
  back: messages.back,
  exit: messages.exit
};

var helpMenu = {
  type: 'list',
  name: 'helpMenu',
  message: messages.getSecret.menu,
  choices: getChoices(getSecretOpts)
};


// ---


function showOptions(question) {

  module.exports.commands = {
    back: require('../browse'),
    exit: require('./helpers/exit')
  };

  module.exports.prompt = inquirer.prompt([question], function questionCallback(answer) {
    module.exports.commands[answer.helpMenu](mitro);
  });

}


// ---


module.exports = function browseGetSecret(_mitro) {

  mitro = _mitro;

  help();

  showOptions(helpMenu);

};

