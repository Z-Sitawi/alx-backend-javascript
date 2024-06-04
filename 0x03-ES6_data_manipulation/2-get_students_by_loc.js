#!/usr/bin/node
export default function getStudentsByLocation(objsArray, city) {
  return objsArray.filter((element) => element.location === city);
}
