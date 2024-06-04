#!/usr/bin/node
export default function hasValuesFromArray(Set, myArray) {
  return myArray.every((ele) => Set.has(ele));
}
