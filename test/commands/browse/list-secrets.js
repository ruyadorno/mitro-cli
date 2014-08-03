var expect = require('expect.js');

var listSecrets = require('../../../lib/commands/browse/list-secrets');

var mockMitro = require('../../mock-mitro');


// ---


describe('commands/browse/list-secrets', function () {

  it('should be able to exit interactive mode', function (done) {

    // Mock process.exit to test
    var _exitFn = process.exit;
    process.exit = function (code) {
      expect(code).to.be.eql(0);
      process.exit = _exitFn;
      done();
    };

    listSecrets(mockMitro);

    var prompt = listSecrets.prompt;

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

  });


  // ---


  it('should be able to go back to browse command', function (done) {

    listSecrets(mockMitro);

    var _backCmd = listSecrets.commands.back;
    listSecrets.commands.back = function () {
      expect(true).to.be.ok();
      listSecrets.commands.back = _backCmd;
      done();
    };

    var prompt = listSecrets.prompt;

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

  });

});

