#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    // Split the data into lines and parse each line
    const lines = data.split('\n');
    lines.shift();
    const students = [];
    lines.forEach((line) => {
      const row = line.split(',');
      const student = {
        firstname: row[0],
        lastname: row[1],
        age: row[2],
        field: row[3],
      };
      students.push(student);
    });
    const allFields = students.map((student) => student.field);
    const distinctFields = [...new Set(allFields)];

    console.log(`Number of students: ${students.length}`);

    distinctFields.forEach((ele) => {
      const fStudents = students.filter((student) => student.field === ele);
      let fSnames = '';
      for (let i = 0; i < fStudents.length; i += 1) {
        if (i < fStudents.length - 1) fSnames += `${fStudents[i].firstname}, `;
        else fSnames += fStudents[i].firstname;
      }
      console.log(`Number of students in ${ele}: ${fStudents.length}. List: ${fSnames}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
