var tape = require('tape'),
  sinon = require('sinon'),
  forceAttract = require('../');

tape('forceAttract() returns a valid force module.', function (test) {
  var unit = forceAttract.forceAttract();
  test.equal(typeof forceAttract, 'object');
  test.equal(typeof forceAttract.forceAttract, 'function');
  test.equal(typeof unit, 'function');
  test.equal(typeof unit.initialize, 'function');
  test.equal(typeof unit.strength, 'function');
  test.equal(typeof unit.target, 'function');
  test.end();
});

tape('initialize(nodes) calls strength and target accessors once for each node', function (test) {
  var stub_strength = sinon.stub(),
    stub_target = sinon.stub(),
    nodes = [{}, {}, {}],
    unit = forceAttract.forceAttract();
  unit.strength(stub_strength);
  unit.target(stub_target);
  unit.initialize(nodes);
  test.equal(stub_strength.callCount, nodes.length);
  test.equal(stub_target.callCount, nodes.length);
  test.end();
});

tape('strength(const) wraps in a function and returns the force', function (test) {
  var unit = forceAttract.forceAttract();
  test.equal(unit.strength(1), unit);
  test.equal(typeof unit.strength(), 'function');
  test.end();
});

tape('strength(fn) calls fn once for each node and returns the force', function (test) {
  var stub = sinon.stub(),
    nodes = [{}, {}, {}],
    unit = forceAttract.forceAttract();
  unit.initialize(nodes);
  test.equal(unit.strength(stub), unit);
  test.equal(stub.callCount, nodes.length);
  test.end();
});

tape('strength() returns the accessor', function (test) {
  var unit = forceAttract.forceAttract();
  test.equal(typeof unit.strength(), 'function');
  test.end();
});

tape('target(const) wraps in a function and returns the force', function (test) {
  var unit = forceAttract.forceAttract();
  test.equal(unit.target([0, 0]), unit);
  test.equal(typeof unit.target(), 'function');
  test.end();
});

tape('target(fn) calls fn once for each node and returns the force', function (test) {
  var stub = sinon.stub(),
    nodes = [{}, {}, {}],
    unit = forceAttract.forceAttract();
  unit.initialize(nodes);
  test.equal(unit.target(stub), unit);
  test.equal(stub.callCount, nodes.length);
  test.end();
});

tape('target() returns the accessor', function (test) {
  var unit = forceAttract.forceAttract();
  test.equal(typeof unit.target(), 'function');
  test.end();
});
