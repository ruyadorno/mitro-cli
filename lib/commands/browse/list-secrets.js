var inquirer = require('inquirer');
var log = require('simple-output');

var formatSecretsResults = require('../list-secrets').formatResults;
var config = require('../../config');
var messages = require('../../messages').commands.browse;
var getChoices = require('./helpers/get-choices');
var resetAPI = require('./helpers/resetAPI');

var mitro;


// ---


var listSecretsOpts = {
  back: messages.back,
  exit: messages.exit
};

var secretsMenu = {
  type: 'list',
  name: 'secretsMenu',
  message: messages.listSecrets.menu,
  choices: getChoices(listSecretsOpts)
};


// ---


function addSelectSecretFn(commands, secretsList, fn) {

  secretsList.forEach(function (item) {

    // Function to be invoked when selecting a secret on the list
    commands[item.value] = function openSecret(mitro) {
      // Sets the chosen value on config
      config._[1] = item.value;
      fn(mitro);
    };
  });

}

function showOptions(question, secretsList) {

  module.exports.commands = {
    back: require('../browse'),
    exit: require('./helpers/exit')
  };

  if (secretsList) {
    addSelectSecretFn(module.exports.commands, secretsList, require('./get-secret'));
  }

  module.exports.prompt = inquirer.prompt([question], function questionCallback(answer) {
    module.exports.commands[answer.secretsMenu](mitro);
  });

}

function formatSecretObjs(secrets) {

  var explodedSecret;
  var sep = require('../../messages').commands.listSecrets.separator;
  var arr = [];

  secrets.forEach(function (item) {
    if (item !== '') {
      explodedSecret = item.split(sep);
      arr.push({
        name: explodedSecret[1],
        value: explodedSecret[0]
      });
    }
  });

  return arr;

}

function getSecretsItems(data) {

  var arr;
  var results = formatSecretsResults(data);

  arr = results.split('\n');

  return formatSecretObjs(arr);

}

function onSuccess(data) {

  var secretsList = getSecretsItems(data);

  secretsMenu.choices = secretsList.concat(secretsMenu.choices);
  showOptions(secretsMenu, secretsList);

}

function onError(data) {
  log.error(messages.error + data.userVisibleError);
  showOptions(secretsMenu);
}


// ---


module.exports = function browseListSecrets(_mitro) {

  mitro = _mitro;

  resetAPI();

  mitro.runCommand(mitro.ListGroupsAndSecrets, config, onSuccess, onError);

};

