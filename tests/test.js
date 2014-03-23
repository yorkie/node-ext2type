
var test = require('tape');
var ext2type = require('../');

test('test cases', function(t) {
  t.equal(ext2type('.html'), 'application/html');
  t.equal(ext2type('.md'), 'application/md');
  t.equal(ext2type('.json'), 'application/json');

  t.equal(ext2type('html'), 'application/html');
  t.equal(ext2type('json'), 'application/json');
	t.end();
})
