module.exports = function getChoices(opts) {

  var arr = [];

  for (var key in opts) {
    if (opts.hasOwnProperty(key)) {
      arr.push({
        name: opts[key],
        value: key
      });
    }
  }

  return arr;

};

