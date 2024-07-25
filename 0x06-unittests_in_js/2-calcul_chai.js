#!/usr/bin/node

function calculateNumber(type, a, b) {
  const n1 = Math.round(a); const n2 = Math.round(b);

  switch (type) {
    case 'SUM':
      return n1 + n2;
    case 'SUBTRACT':
      return n1 - n2;
    case 'DIVIDE':
      return (n2 == 0)? 'Error': n1 / n2;
    default:
      return 'Invalid type';
    }

}
module.exports = calculateNumber;
