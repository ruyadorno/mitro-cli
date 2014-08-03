var log = require('simple-output');

var config = require('../config');
var messages = require('../messages').commands.listGroups;


// ---


function isItemValid(group, key) {
  return group.hasOwnProperty(key) &&
    group[key].name &&
    group[key].name !== '';
}

function formatResults(data) {

  var msg = '\n';
  var groupsKey = 'groups';

  for (var key in data[groupsKey]) {
    if (isItemValid(data[groupsKey], key)) {
      msg +=
        key +
        messages.separator +
        data[groupsKey][key].name +
        '\n';
    }
  }

  return msg;

}

function onSuccess(data) {
  log.success(messages.success + data.myUserId);
  log.message(formatResults(data));
}

function onError(data) {
  log.error(messages.error + data.userVisibleError);
}


// ---


module.exports = function listAll(mitro) {
  mitro.runCommand(mitro.ListGroupsAndSecrets, config, onSuccess, onError);
};

module.exports.formatResults = formatResults;

