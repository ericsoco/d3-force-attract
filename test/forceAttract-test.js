var tape = require('tape'),
    forceAttract = require('../');

tape('forceAttract() returns a valid force module.', function (test) {
  test.equal(typeof forceAttract, 'object');
  test.equal(typeof forceAttract.forceAttract, 'function');
  test.equal(typeof forceAttract.forceAttract(), 'function');
  test.equal(typeof forceAttract.forceAttract().initialize, 'function');
  test.equal(typeof forceAttract.forceAttract().strength, 'function');
  test.equal(typeof forceAttract.forceAttract().target, 'function');
  test.end();
});
