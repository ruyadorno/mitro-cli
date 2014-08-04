var config = require('../../../config');


module.exports = function resetAPI() {
  // By erasing the transaction data we can reset
  // the API and get a new private key
  config._transactionSpecificData = null;
};

