var expect = require('expect.js');
var mockLog = require('simple-output');

var config = require('../../lib/config');

var browse = require('../../lib/commands/browse');


// ---


describe('commands/browse', function () {

  var stdout;
  var stderr;
  var mockStdout = {
    write: function write(msg) {
      stdout += msg;
    }
  };
  var mockStderr = {
    write: function write(msg) {
      stderr += msg;
    }
  };

  beforeEach(function () {
    stdout = '';
    stderr = '';
    mockLog.stdout = mockStdout;
    mockLog.stderr = mockStderr;
    config.forceFail = null;
  });


  // ---


  it('should be able to exit interactive mode', function () {

    // Mock process.exit to test
    var _exitFn = process.exit;
    process.exit = function (code) {
      expect(code).to.be.eql(0);
      process.exit = _exitFn;
    };

    var prompt = browse();

    prompt.rl.emit("keypress", "", { name : "up" });
    prompt.rl.emit("line");

  });

});

