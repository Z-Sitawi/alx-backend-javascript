#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  const array = [];
  for (let idx of array) {
      array.push(appendString + idx);
  }
  return array;
}
