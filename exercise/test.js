import assert from 'assert';
import solution from './solution';

assert.equal('b', solution.arrayFetch(['a', 'b', 'c', 'd'], 1, 'e'));
assert.equal('c', solution.arrayFetch(['a', 'b', 'c', 'd'], -1, 'e'));
assert.equal('e', solution.arrayFetch(['a', 'b', 'c', 'd'], -12, 'e'));
