var log = require('simple-output');

var config = require('../config');
var messages = require('../messages').commands.listSecrets;


// ---


function getSecretName(secretObject) {

  var name;
  var data = JSON.parse(secretObject.clientData);

  if (data.title) {
    name = data.title;
  } else {
    name = data.loginUrl;
  }

  return name;

}

function formatResults(data) {

  var msg = '\n';
  var secretsKey = 'secretToPath';

  for (var key in data[secretsKey]) {
    if (data[secretsKey].hasOwnProperty(key)) {
      msg +=
        key +
        messages.separator +
        getSecretName(data[secretsKey][key]) +
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

