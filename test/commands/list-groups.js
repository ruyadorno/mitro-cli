var expect = require('expect.js');
var mockLog = require('simple-output');
var symbol = require('log-symbols');

var config = require('../../lib/config');
var messages = require('../../lib/messages').commands.listGroups;

var mockMitro = require('../mock-mitro');
var listGroups = require('../../lib/commands/list-groups');


// ---


describe('commands/list-groups', function () {

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

    listGroups(mockMitro);

    expect(stdout).to.be.eql(
      symbol.success + '  ' + messages.success +
      'example@example.com\n\n03032 - Group\n\n'
    );

  });


  // ---


  it('should display error message on fail', function () {

    config.forceFail = true;

    listGroups(mockMitro);

    expect(stderr).to.be.eql(
      symbol.error + '  ' + messages.error +
      'Please click the verification link we sent to your email (3bwaaq)\n'
    );

  });

});

