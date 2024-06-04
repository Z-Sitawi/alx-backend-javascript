#!/usr/bin/node
export default function cleanSet(Set, myStartString) {
  if (!Set || !myStartString || !(Set instanceof Set) || typeof myStartString !== 'string') {
  return '';
  }
  return Array.from(Set)
    .filter((ele) => ele && ele.startsWith(myStartString))
    .map((ele) => ele.replace(myStartString, ''))
    .join('-');
}
