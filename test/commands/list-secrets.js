var expect = require('expect.js');
var mockLog = require('simple-output');

var mockMitro = require('../mock-mitro');
var listSecrets = require('../../lib/commands/list-secrets');

describe('commands/list-secrets', function () {

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
  });


  // ---


  it('should be able to list all user secrets', function () {

    listSecrets(mockMitro);

    expect(stdout).to.be.eql(
      '\u001b[32m✔︎\u001b[39m  Listing secrets for user: example@example.com\n\n400001 - hello\n400002 - my secret\n\n'
    );

  });

});

