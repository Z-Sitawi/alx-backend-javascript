#!/usr/bin/node
const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        if (lines.length === 0) {
          return reject(new Error('File is empty'));
        }

        const hashtable = {};
        let students = 0;
        let result = '';

        // Assuming the first line is the header
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line !== '') {
            const columns = line.split(',');
            const field = columns[3];
            const firstname = columns[0];
            if (!hashtable[field]) {
              hashtable[field] = [];
            }
            hashtable[field].push(firstname);
            students += 1;
          }
        }

        result += `Number of students: ${students}\n`;
        for (const key in hashtable) {
          if (Object.prototype.hasOwnProperty.call(hashtable, key)) {
            result += `Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}\n`;
          }
        }
        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.status(200).send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
