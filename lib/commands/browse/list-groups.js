var inquirer = require('inquirer');
var log = require('simple-output');

var formatGroupResults = require('../list-groups').formatResults;
var config = require('../../config');
var messages = require('../../messages').commands.browse;
var getChoices = require('./helpers/get-choices');

var mitro;


// ---


var listGroupsOpts = {
  back: messages.back,
  exit: messages.exit
};

var groupsMenu = {
  type: 'list',
  name: 'groupsMenu',
  message: messages.listGroups.menu,
  choices: getChoices(listGroupsOpts)
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

function formatGroupObjs(groups) {

  var explodedGroup;
  var sep = require('../../messages').commands.listGroups.separator;
  var arr = [];

  groups.forEach(function (item) {
    if (item !== '') {
      explodedGroup = item.split(sep);
      arr.push({
        name: explodedGroup[1],
        value: explodedGroup[0]
      });
    }
  });

  return arr;

}

function getGroupsItems(data) {

  var arr;
  var results = formatGroupResults(data);

  arr = results.split('\n');

  return formatGroupObjs(arr);

}

function onSuccess(data) {

  var groups = getGroupsItems(data);

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

