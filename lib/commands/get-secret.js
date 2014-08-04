var log = require('simple-output');

var config = require('../config');
var messages = require('../messages').commands.getSecret;


// ---


function getResultObj(data) {

  var obj = { id: data.secretId };

  if (JSON.parse(data.clientData).title) {
    obj.title = JSON.parse(data.clientData).title;
    obj.secret = JSON.parse(data.criticalData).note;
  } else {
    obj.isPass = true;
    obj.title = JSON.parse(data.clientData).loginUrl;
    obj.username = JSON.parse(data.clientData).username;
    obj.password = JSON.parse(data.criticalData).password;
  }

  return obj;

}

function formatResults(data) {

  var msg = '\n';

  if (data.isPass) {
    msg += 'Username: ' + data.username + '\n';
    msg += 'Password: ' + data.password;
  } else {
    msg += data.secret;
  }

  return msg;

}

function onSuccess(data) {

  var obj = getResultObj(data);

  log.success(messages.success + obj.title);
  log.message(formatResults(obj));

}

function onError(data) {
  log.error(messages.error + data.userVisibleError);
}


// ---


module.exports = function listSecrets(mitro) {
  // Id value is received directly from config._ property
  mitro.runCommand(mitro.GetSecret, config, onSuccess, onError);
};

module.exports.getResultObj = getResultObj;
module.exports.formatResults = formatResults;

