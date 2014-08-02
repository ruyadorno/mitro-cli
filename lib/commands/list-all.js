var mitro = require('mitro/mitro_lib');

var config = require('../config');


// ---


module.exports = function listAll() {
  mitro.runCommand(mitro.ListGroupsAndSecrets, config);
};

