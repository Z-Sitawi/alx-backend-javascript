#!/usr/bin/node
export default function setFromArray(myArray) {
  return new Set([...myArray]);
}
