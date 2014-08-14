var config = require('./config');
var inquirer = require('inquirer');
var messages = require('./messages').configStart;
var debug = require('./debug');


// ---


var usernameInput = {
  type: 'input',
  name: 'username',
  message: messages.username
};

var passwordInput = {
  type: 'password',
  name: 'password',
  message: messages.password
};


// ---


module.exports = function startConfig(done, startCommand) {

  debug.activeDebugMode();

  var hasUsername = false;
  var hasPassword = false;

  function getUsername() {
    inquirer.prompt([usernameInput], function userQuestionCallback(answer) {
      config.uid = answer.username;
      hasUsername = true;
      checkDone();
    });
  }

  function getPassword() {
    inquirer.prompt([passwordInput], function passQuestionCallback(answer) {
      config.password = answer.password;
      hasPassword = true;
      checkDone();
    });
  }

  function testUsername() {
    if (!config.uid) {
      getUsername();
    } else {
      hasUsername = true;
    }
    return hasUsername;
  }

  function testPassword() {
    if (!config.password) {
      getPassword();
    } else {
      hasPassword = true;
    }
    return hasPassword;
  }

  function checkDone() {
    if (testUsername() && testPassword()) {
      done();
    }
  }


  // ---


  (function start() {

    if (startCommand === 'help') {
      return done();
    }

    checkDone();

  })();

};

