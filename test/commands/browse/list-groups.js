var expect = require('expect.js');

var listGroups = require('../../../lib/commands/browse/list-groups');

var mockMitro = require('../../mock-mitro');


// ---


describe('commands/browse/list-groups', function () {

  it('should be able to exit interactive mode', function (done) {

    // Mock process.exit to test
    var _exitFn = process.exit;
    process.exit = function (code) {
      expect(code).to.be.eql(0);
      process.exit = _exitFn;
      done();
    };

    listGroups(mockMitro);

    var prompt = listGroups.prompt;

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

  });


  // ---


  it('should be able to go back to browse command', function (done) {

    listGroups(mockMitro);

    var _backCmd = listGroups.commands.back;
    listGroups.commands.back = function () {
      expect(true).to.be.ok();
      listGroups.commands.back = _backCmd;
      done();
    };

    var prompt = listGroups.prompt;

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

  });

});

