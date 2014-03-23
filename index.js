
var util = require('util');

function ext2type(name) {
  if (typeof name !== 'string') {
    throw new Error('1st argument should be a string');
  }
  return util.format('application/%s', name.replace(/^\./, ''));
}

module.exports = ext2type;
