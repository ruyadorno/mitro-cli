var fe = require('mitro/mitro_fe');
var mitro = require('mitro/mitro_lib');


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
  listSecrets: 'list-secrets'
};


// ---


module.exports = function init(argv) {

  var command = argv._[0];
  var runCommand = availableCommands[command];

  fe.setDeviceId(argv.deviceId);

  if (command && runCommand) {
    require('../lib/commands/' + runCommand)(mitro);
  }

};

