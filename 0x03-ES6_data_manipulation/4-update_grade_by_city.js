#!/usr/bin/node
/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(objsArray, city, newGrades) {
  return objsArray
    .filter((element) => element.location === city)
    .map((obj) => {
      const newGradesList = newGrades.filter(({ studentId }) => studentId === obj.id);
      if (newGradesList.length > 0) { // Check if newGradesList exists and has elements
        obj.grade = newGradesList[0].grade;
      } else {
        obj.grade = 'N/A';
      }
      return obj; // Return the updated object
    });
}
