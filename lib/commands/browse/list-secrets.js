var inquirer = require('inquirer');
var log = require('simple-output');

var formatSecretsResults = require('../list-secrets').formatResults;
var config = require('../../config');
var messages = require('../../messages').commands.browse;
var getChoices = require('./helpers/get-choices');

var mitro;


// ---


var listSecretsOpts = {
  back: messages.back,
  exit: messages.exit
};

var groupsMenu = {
  type: 'list',
  name: 'groupsMenu',
  message: messages.listSecrets.menu,
  choices: getChoices(listSecretsOpts)
};


// ---


function showOptions(question) {

  var commands = {
    back: require('../browse'),
    exit: require('./helpers/exit')
  };

  module.exports.prompt = inquirer.prompt([question], function questionCallback(answer) {
    commands[answer.groupsMenu](mitro);
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

  var groups = getSecretsItems(data);

  groupsMenu.choices = groups.concat(groupsMenu.choices);
  showOptions(groupsMenu);

}

function onError(data) {
  log.error(messages.error + data.userVisibleError);
  showOptions(groupsMenu);
}


// ---


module.exports = function browseListGroups(_mitro) {

  mitro = _mitro;
  mitro.runCommand(mitro.ListGroupsAndSecrets, config, onSuccess, onError);

};

