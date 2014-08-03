var expect = require('expect.js');
var mockLog = require('simple-output');
var symbol = require('log-symbols');

var config = require('../../lib/config');
var messages = require('../../lib/messages').commands.listSecrets;

var mockMitro = require('../mock-mitro');
var listSecrets = require('../../lib/commands/list-secrets');


// ---


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
    config.forceFail = null;
  });


  // ---


  it('should be able to list all user secrets', function () {

    listSecrets(mockMitro);

    expect(stdout).to.be.eql(
      symbol.success + '  ' + messages.success +
      'example@example.com\n\n400001 - hello\n400002 - my secret\n\n'
    );

  });


  // ---


  it('should display error message on fail', function () {

    config.forceFail = true;

    listSecrets(mockMitro);

    expect(stderr).to.be.eql(
      symbol.error + '  ' + messages.error +
      'Please click the verification link we sent to your email (3bwaaq)\n'
    );

  });

});

