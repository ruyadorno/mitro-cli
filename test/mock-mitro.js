var listGroupsAndSecretsSuccessFixture =
  require('./fixtures/list-groups-and-secrets-success.json');
var listGroupsAndSecretsErrorFixture =
  require('./fixtures/list-groups-and-secrets-error.json');
var getSecretNoteSuccess =
  require('./fixtures/get-secret-note-success.json');
var getSecretPassSuccess =
  require('./fixtures/get-secret-pass-success.json');
var getSecretError =
  require('./fixtures/get-secret-error.json');


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

function GetSecret(config, onSuccess, onError) {
  if (config.forceFail) {
    onError(getSecretError);
  } else {
    if (config._[1] === "400001") {
      onSuccess(getSecretNoteSuccess);
    } else {
      onSuccess(getSecretPassSuccess);
    }
  }
}


// ---


module.exports = {
  runCommand: runCommand,
  GetSecret: GetSecret,
  ListGroupsAndSecrets: ListGroupsAndSecrets
};

