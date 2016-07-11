import assert from 'assert';
import arrayFetch from './solution';

describe('arrayFetch', () => {
  it('should work', () => {
    assert.equal('b', arrayFetch(['a', 'b', 'c', 'd'], 1, 'e'));
    assert.equal('c', arrayFetch(['a', 'b', 'c', 'd'], -1, 'e'));
  });
  it('default value', () => {
    assert.equal('e', arrayFetch(['a', 'b', 'c', 'd'], 12, 'e'));
  });
});
