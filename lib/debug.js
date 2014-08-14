var config = require('./config');


// ---


function activeDebugMode() {

  // Adds console.log function to print mitro api feedback
  if (config.debug) {
    console.log = function() {
      process.stdout.write(JSON.stringify(Array.prototype.slice.call(arguments), null, 2));
    };
  }
}


// ---


module.exports = {
  activeDebugMode: activeDebugMode
};

