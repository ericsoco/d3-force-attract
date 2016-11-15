# d3-force-attract

Modular force for use with D3's [`forceSimulation`](https://github.com/d3/d3-force#forceSimulation).

Pulls nodes toward a specified ⟨*x*, *y*⟩ target point.

[![Build Status](https://travis-ci.org/ericsoco/d3-force-attract.svg?branch=master)](https://travis-ci.org/ericsoco/d3-force-attract)


## Installing

#### npm

`npm install d3-force-attract`

#### CDN, via `<script>`

`<script src="https://wzrd.in/standalone/d3-force-attract@latest"></script>`

#### Local, via `<script>`

Download the [latest release](https://github.com/ericsoco/d3-force-attract/releases/latest)

`<script src="./d3-force-attract.min.js"></script>`

#### [UNPKG](https://unpkg.com/)

`<script src="https://unpkg.com/d3-force-attract@latest"></script>`


## Usage

### Accessing the module

The install method you use determines the syntax for accessing the module in your code:

#### npm

Import the `forceAttract()` method and use it in a `forceSimulation`.

```
import { forceAttract } from 'd3-force-attract'
// ...
d3.forceSimulation
	.force('attract', forceAttract());
```

#### via `<script>`, [UNPKG](https://unpkg.com/)

The `forceAttract()` method is available in the global `d3` namespace.

```
d3.forceSimulation
	.force('attract', d3.forceAttract());
```

### Using the module

Add an `'attract'` force just like you would any other D3 force module:

```
// add an attract force to pull nodes toward the center of the screen
d3.forceSimulation()
	.force('attract', forceAttract()	// see 'Accessing the module' above for the correct syntax
    .target([width/2, height/2])
    .strength(0.05));

```

More detailed examples:
- [Mouse following<br>![Mouse following](http://bl.ocks.org/ericsoco/raw/7eebab15da4bb1040977da508aebbff6/thumbnail.png)](http://bl.ocks.org/ericsoco/7eebab15da4bb1040977da508aebbff6)
- [Mouse following with collision<br>![Mouse following with collision](http://bl.ocks.org/ericsoco/raw/6e0573860e7f6655cee885d8b1b84065/thumbnail.png)](http://bl.ocks.org/ericsoco/6e0573860e7f6655cee885d8b1b84065)
- [Centered cluster layout<br>![Centered cluster layout](http://bl.ocks.org/ericsoco/raw/d2d49d95d2f75552ac64f0125440b35e/thumbnail.png)](http://bl.ocks.org/ericsoco/d2d49d95d2f75552ac64f0125440b35e)
- [Mouse following cluster layout<br>![Mouse following cluster layout](http://bl.ocks.org/ericsoco/raw/11d5013dee991b219b205a4ecd558d7c/thumbnail.png)](http://bl.ocks.org/ericsoco/11d5013dee991b219b205a4ecd558d7c)



## API

The [`forceAttract`](https://github.com/ericsoco/d3-force-attract/blob/master/lib/forceAttract.js) module follows the [basic interface described in d3-force](https://github.com/d3/d3-force/blob/master/README.md#forces), additionally implementing the following:

<a name="attract_initialize" href="#attract_initialize">#</a> <i>attract</i>.<b>initialize</b>(<i>nodes</i>) [<>](https://github.com/ericsoco/d3-force-attract/blob/master/lib/forceAttract.js#L20 "Source")

Assigns the array of *nodes* to this force. This method is called when a force is bound to a simulation via [*simulation*.force](https://github.com/d3/d3-force/blob/master/README.md#simulation_force) and when the simulation’s nodes change via [*simulation*.nodes](https://github.com/d3/d3-force/blob/master/README.md#simulation_nodes). A force may perform necessary work during initialization, such as evaluating per-node parameters, to avoid repeatedly performing work during each application of the force.

<a name="attract_strength" href="#attract_strength">#</a> <i>attract</i>.<b>strength</b>([<i>strength</i>]) [<>](https://github.com/ericsoco/d3-force-attract/blob/master/lib/forceAttract.js#L33 "Source")

If *strength* is specified, sets the force strength to the specified number in the range [0,1] and returns this force. If *strength* is not specified, returns the current strength, which defaults to 0.1. Um, I guess if *strength* is negative, this might act as a repulsion force? 🤔 I should try that!

This parameter determines the attraction strength of each node to the specified (via [*attract*.target](#attract_target)) target node/position.

<a name="attract_target" href="#attract_target">#</a> <i>attract</i>.<b>target</b>([<i>target</i>]) [<>](https://github.com/ericsoco/d3-force-attract/blob/master/lib/forceAttract.js#L37 "Source")

If *target* is specified, sets the target point accessor to the specified two-element array `[x, y]` or function, re-evaluates the target point accessor for each node, and returns this force. If *target* is not specified, returns the current target point accessor, which defaults to a function that returns `[0, 0]`.

The target point accessor is invoked for each node in the simulation, being passed the node, its zero-based index, and the array of all nodes (the standard D3 format of `(d, i, nodes)`). The resulting ⟨*x*, *y*⟩ point is then stored internally, such that the target point for each node is only recomputed when the force is initialized or when this method is called with a new target, and not on every application of the force.


## Building and testing

Install [nvm](http://nvm.sh) and [npm](http://npmjs.com) if you haven't already.

Build with the following commands:

```bash
nvm use
npm install
npm run dist
```

Test with `npm run test`.
