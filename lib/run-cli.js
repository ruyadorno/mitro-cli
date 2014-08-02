var fe = require('mitro/mitro_fe');


// ---


var availableCommands = {
  ls: 'list-all'
};


// ---


module.exports = function init(argv) {

  var command = argv._[0];
  var runCommand = availableCommands[command];

  fe.setDeviceId(argv.deviceId);

  if (command && runCommand) {
    require('../lib/commands/' + runCommand)();
  }

};

