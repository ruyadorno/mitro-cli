var listGroupsAndSecretsSuccessFixture = 
  require('./fixtures/list-groups-and-secrets-success.json');
var listGroupsAndSecretsErrorFixture = 
  require('./fixtures/list-groups-and-secrets-error.json');


// ---


function runCommand (command, config, onSuccess, onError) {
  command(config, onSuccess, onError);
}

function ListGroupsAndSecrets(config, onSuccess, onError) {
  if (config.forceFail) {
    onError(listGroupsAndSecretsErrorFixture);
  } else {
    onSuccess(listGroupsAndSecretsSuccessFixture);
  }
}


// ---


module.exports = {
  runCommand: runCommand,
  ListGroupsAndSecrets: ListGroupsAndSecrets
};

