#!/usr/bin/node
function getSum(num1, num2) {
  return num1 + num2;
}

export default function getStudentIdsSum(objsArray) {
  const studentsIdsList = objsArray.map((elelment) => elelment.id);
  return studentsIdsList.reduce(getSum, 0);
}
