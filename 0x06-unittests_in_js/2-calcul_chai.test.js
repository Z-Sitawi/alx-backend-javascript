#!/usr/bin/node
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {

  // Test cases for SUM
  it('should return 4 for SUM operation with inputs 1.4 and 2.7', function() {
    expect(calculateNumber('SUM', 1.4, 2.7)).to.equal(4);
  });

  it('should return 7 for SUM operation with inputs 2.5 and 3.5', function() {
    expect(calculateNumber('SUM', 2.5, 3.5)).to.equal(7);
  });

  // Test cases for SUBTRACT
  it('should return -2 for SUBTRACT operation with inputs 1.4 and 2.7', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 2.7)).to.equal(-2);
  });

  it('should return 1 for SUBTRACT operation with inputs 3.5 and 2.5', function() {
    expect(calculateNumber('SUBTRACT', 3.5, 2.5)).to.equal(1);
  });

  // Test cases for DIVIDE
  it('should return 2 for DIVIDE operation with inputs 5.5 and 2.5', function() {
    expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
  });

  it('should return 2 for DIVIDE operation with inputs 3.5 and 2', function() {
    expect(calculateNumber('DIVIDE', 3.5, 2)).to.equal(2);
  });

  it('should return "Error" for DIVIDE operation with zero divisor', function() {
    expect(calculateNumber('DIVIDE', 3.5, 0)).to.equal('Error');
  });

  // Test case for invalid operation type
  it('should return "Invalid type" for unknown operation type', function() {
    expect(calculateNumber('UNKNOWN', 1.4, 2.7)).to.equal('Invalid type');
  });

});
