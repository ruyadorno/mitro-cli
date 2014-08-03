var expect = require('expect.js');
var mockLog = require('simple-output');
var symbol = require('log-symbols');

var config = require('../../lib/config');
var messages = require('../../lib/messages').commands;

var mockMitro = require('../mock-mitro');
var listAll = require('../../lib/commands/list-all');


// ---


describe('commands/list-all', function () {

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

    listAll(mockMitro);

    expect(stdout).to.be.eql(
      symbol.success + '  ' + messages.listAll.success +
      'example@example.com\n' +
      messages.listAll.secretsTitle +
      '\n400001 - hello\n400002 - my secret\n400003 - https://vimeo.com/\n' +
      messages.listAll.groupsTitle +
      '\n03032 - Group\n\n'
    );

  });


  // ---


  it('should display error message on fail', function () {

    config.forceFail = true;

    listAll(mockMitro);

    expect(stderr).to.be.eql(
      symbol.error + '  ' + messages.listAll.error +
      'Please click the verification link we sent to your email (3bwaaq)\n'
    );

  });

});

