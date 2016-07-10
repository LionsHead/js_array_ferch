import assert from 'assert';
import solution from './solution';

assert.equal('b', solution.arrayFetch(["a", "b", "c"], 1, "d"]));
assert.equal('c', solution.arrayFetch(["a", "b", "c"], -1, "d"]));
