var expect = require('expect.js');

var listGroups = require('../../../lib/commands/browse/list-groups');

var mockMitro = require('../../mock-mitro');


// ---


describe('commands/browse', function () {

  it('should be able to exit interactive mode', function () {

    // Mock process.exit to test
    var _exitFn = process.exit;
    process.exit = function (code) {
      expect(code).to.be.eql(0);
      process.exit = _exitFn;
    };

    listGroups(mockMitro);

    var prompt = listGroups.prompt;

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

  });

});

