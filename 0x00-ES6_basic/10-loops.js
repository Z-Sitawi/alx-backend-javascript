#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
      array.push(appendString + idx);
  }
  return newArray;
}
