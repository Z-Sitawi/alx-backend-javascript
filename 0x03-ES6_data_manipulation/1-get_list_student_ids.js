#!/usr/bin/node
export default function getListStudentIds(objsArray) {
  if (Array.isArray(objsArray)) {
    const listIds = [];
    objsArray.forEach((element) => {
      listIds.push(element.id);
    });
    return listIds;
  }
  return [];
}
