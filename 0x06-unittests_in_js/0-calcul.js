#!/usr/bin/node

function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

console.log(calculateNumber(2.5, 3.5))

module.exports = calculateNumber;
