/**
 * Pulls nodes toward a specified `(x, y)` target point.
 */
function attract (target) {

  let nodes,
    targets,
    strength = 0.1;

  function force (alpha) {
    let node, target;
    for (let i=0; i<nodes.length; i++) {
      node = nodes[i];
      target = targets[i];
      node.vx += (target[0] - node.x) * strength * alpha;
      node.vy += (target[1] - node.y) * strength * alpha;
    }
  }

  function initialize () {
    if (!nodes) return;

    // populate local `targets` using `target` accessor
    targets = new Array(nodes.length);
    for (let i=0; i<nodes.length; i++) targets[i] = target(nodes[i], i, nodes);
  }

  force.initialize = _ => {
    nodes = _;
    initialize();
  };

  force.strength = _ => {
    return _ == null ? strength : (strength = +_, force);
  };

  force.target = _ => {
    // keep existing value if passed invalid value
    if (_ == null) return _ = target;

    // coerce `target` accessor into a function
    target = typeof _ === 'function' ? _ : () => _;

    // reinitialize
    initialize();

    // allow chaining
    return force;
  };

  if (!target) force.target([ 0, 0 ]);
  return force;

}

export default attract;