#!/usr/bin/node
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
  throw new Error('Position outside range');
  }
  const myInt8Array = new Int8Array(length);
  myInt8Array.fill(value, position, position + 1);
  return new DataView(myInt8Array.buffer);
}
