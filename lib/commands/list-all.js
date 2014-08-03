var mitro = require('mitro/mitro_lib');
var log = require('simple-output');

var config = require('../config');
var messages = require('../messages').commands.listAll;
var formatSecretsResults = require('./list-secrets').formatResults;
var formatGroupsResults = require('./list-groups').formatResults;


// ---


function onSuccess(data) {
  log.success(messages.success + data.myUserId);
  log.message(
    messages.secretsTitle +
    formatSecretsResults(data) +
    messages.groupsTitle +
    formatGroupsResults(data)
  );
}

function onError(data) {
  log.error(messages.error + data.userVisibleError);
}


// ---


module.exports = function listAll() {
  mitro.runCommand(mitro.ListGroupsAndSecrets, config, onSuccess, onError);
};

