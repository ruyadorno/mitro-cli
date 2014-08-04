var config = require('./config');
var inquirer = require('inquirer');
var messages = require('./messages').configStart;


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

  function checkDone() {
    if (hasUsername && hasPassword) {
      done();
    }
  }


  // ---


  (function start() {

    if (startCommand === 'help') {
      return done();
    }

    if (!config.uid) {
      getUsername();
    } else {
      hasUsername = true;
    }

    if (!config.password) {
      getPassword();
    } else {
      hasPassword = true;
    }

    checkDone();

  })();

};

