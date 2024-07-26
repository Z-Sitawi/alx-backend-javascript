#!/usr/bin/node
const fs = require('fs').promises; // Use the Promise-based version of the fs module

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((content) => {
      // Process the file content
      try {
        // Split the data into lines and filter out empty lines
        const lines = content.split('\n').filter((line) => line.trim() !== '');
        if (lines.length < 2) {
          console.log('No data to process');
          return; // Resolve implicitly with no data
        }

        // Remove the header
        lines.shift();
        const students = lines.map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return {
            firstname, lastname, age, field,
          };
        });

        // Count distinct fields
        const allFields = students.map((student) => student.field);
        const distinctFields = [...new Set(allFields)];

        console.log(`Number of students: ${students.length}`);

        distinctFields.forEach((field) => {
          const fStudents = students.filter((student) => student.field === field);
          const fSnames = fStudents.map((student) => student.firstname).join(', ');
          console.log(`Number of students in ${field}: ${fStudents.length}. List: ${fSnames}`);
        });
      } catch (error) {
        console.error('Cannot process the data');
      }
    })
    .catch(() => {
      console.error('Cannot load the database');
    });
}

module.exports = countStudents;
