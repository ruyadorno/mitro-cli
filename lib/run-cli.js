var fe = require('mitro/mitro_fe');
var mitro = require('mitro/mitro_lib');

var startConfig = require('./startConfig');


// ---


var availableCommands = {
  browse: 'browse',
  ls: 'list-all',
  list: 'list-all',
  lg: 'list-groups',
  'list-groups': 'list-groups',
  listGroups: 'list-groups',
  lss: 'list-secrets',
  'list-secrets': 'list-secrets',
  listSecrets: 'list-secrets',
  show: 'get-secret',
  see: 'get-secret',
  'get-secret': 'get-secret',
  get: 'get-secret'
};


// ---


function run(command, runCommand) {

  if (command && runCommand) {
    require('../lib/commands/' + runCommand)(mitro);
  } else {
    // Start interactive mode if no command was provided
    require('../lib/commands/browse')(mitro);
  }

}


// ---


module.exports = function init(argv) {

  var command = argv._[0];
  var runCommand = availableCommands[command];

  fe.setDeviceId(argv.deviceId);

  startConfig(function startConfigCallback() {
    run(command, runCommand);
  });

};

