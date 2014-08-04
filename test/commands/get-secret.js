var expect = require('expect.js');
var mockLog = require('simple-output');
var symbol = require('log-symbols');

var config = require('../../lib/config');
var messages = require('../../lib/messages').commands.getSecret;

var mockMitro = require('../mock-mitro');
var getSecret = require('../../lib/commands/get-secret');


// ---


describe('commands/get-secret', function () {

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


  it('should be able to retrieve a note secret', function () {

    // Set note test fixture
    config._[1] = "400001";

    getSecret(mockMitro);

    expect(stdout).to.be.eql(
      symbol.success + '  ' + messages.success +
      'hello\n\nA12B3C4D5E\n'
    );

  });


  // ---


  it('should be able to retrieve a password secret', function () {

    // Set note test fixture
    config._[1] = "400003";

    getSecret(mockMitro);

    expect(stdout).to.be.eql(
      symbol.success + '  ' + messages.success +
      'https://vimeo.com/\n\nUsername: example@example.com\nPassword: mypassword\n'
    );

  });


  // ---


  it('should show error message on error', function () {

    // Set note test fixture
    config.forceFail = true;

    getSecret(mockMitro);

    expect(stderr).to.be.eql(
      symbol.error + '  ' + messages.error +
      'Please click the verification link we sent to your email (irkh2r)\n'
    );

  });

});

