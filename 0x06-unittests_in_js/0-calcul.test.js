#!/usr/bin/node
// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  
  it('should return 4 when inputs are 1.4 and 2.7', () => {
    assert.strictEqual(calculateNumber(1.4, 2.7), 4);
  });

  it('should return 6 when inputs are 2.5 and 3.5', () => {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7);
  });

  it('should return 1 when inputs are -1.6 and 2.3', () => {
    assert.strictEqual(calculateNumber(-1.6, 2.3), 0);
  });

  it('should return 0 when inputs are 0.4 and -0.4', () => {
    assert.strictEqual(calculateNumber(0.4, -0.4), 0);
  });

  it('should return 2 when inputs are 1.49 and 1.49', () => {
    assert.strictEqual(calculateNumber(1.49, 1.49), 2);
  });

  it('should return -2 when inputs are -1.5 and -1.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
  });

  it('should return 2 when inputs are 1.5 and 0.5', () => {
    assert.strictEqual(calculateNumber(1.5, 0.5), 3);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers correctly', () => {
    assert.strictEqual(calculateNumber(1000000.49, 1000000.5), 2000001);
  });

  it('should handle very small numbers correctly', () => {
    assert.strictEqual(calculateNumber(0.0001, 0.0001), 0);
  });

});
