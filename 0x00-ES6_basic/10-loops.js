#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
      let value = idx;
      array.push(appendString + value);
  }
  return array;
}
