var mitro = require('mitro/mitro_lib');
var log = require('simple-output');

var config = require('../config');
var messages = require('../messages').commands.listAll;


// ---


function getTitleFromSecret(secretObject) {
  return JSON.parse(secretObject.clientData).title;
}

function formatResults(data) {

  var msg = '\n';
  var secretsKey = 'secretToPath';

  for (var key in data[secretsKey]) {
    if (data[secretsKey].hasOwnProperty(key)) {
      msg +=
        key +
        messages.separator +
        getTitleFromSecret(data[secretsKey][key]) +
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


module.exports = function listAll() {
  mitro.runCommand(mitro.ListGroupsAndSecrets, config, onSuccess, onError);
};

