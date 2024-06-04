#!/usr/bin/node
function isArrayOfObjects(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((item) => typeof item === 'object' && item !== null);
}

export default function getListStudentIds(objsArray) {
  if (isArrayOfObjects(objsArray)) {
    const listIds = [];
    objsArray.forEach((element) => {
      listIds.push(element.id);
    });
    return listIds;
  }
  return [];
}
