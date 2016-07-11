import assert from 'assert';
import arrayFetch from './solution';

assert.equal('b', arrayFetch(['a', 'b', 'c', 'd'], 1, 'e'));
assert.equal('c', arrayFetch(['a', 'b', 'c', 'd'], -1, 'e'));
assert.equal('e', arrayFetch(['a', 'b', 'c', 'd'], 12, 'e'));
