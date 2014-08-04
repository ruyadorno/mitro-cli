var inquirer = require('inquirer');
var log = require('simple-output');

var getSecret = require('../get-secret');
var getResultObj = getSecret.getResultObj;
var formatResults = getSecret.formatResults;
var config = require('../../config');
var messages = require('../../messages').commands.browse;
var getChoices = require('./helpers/get-choices');
var resetAPI = require('./helpers/resetAPI');

var mitro;


// ---


var getSecretOpts = {
  back: messages.back,
  exit: messages.exit
};

var groupsMenu = {
  type: 'list',
  name: 'groupsMenu',
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
    module.exports.commands[answer.groupsMenu](mitro);
  });

}

function onSuccess(data) {

  var obj = getResultObj(data);

  log.success(messages.getSecret.success + obj.title);
  log.message(formatResults(obj));

  showOptions(groupsMenu);

}

function onError(data) {
  log.error(messages.error + data.userVisibleError);
  showOptions(groupsMenu);
}


// ---


module.exports = function browseGetSecret(_mitro) {

  mitro = _mitro;

  resetAPI();

  mitro.runCommand(mitro.GetSecret, config, onSuccess, onError);

};

