#!/usr/bin/node
export default function getListStudentIds(objsArray) {
  return (Array.isArray(objsArray)) ? objsArray.map((elelment) => elelment.id) : [];
}
