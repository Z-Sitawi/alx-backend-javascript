#!/usr/bin/node
export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newValue;
  }

  set length(newValue) {
    if (typeof newValue !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newValue;
  }

  set students(newValue) {
    if (!Array.isArray(newValue) || newValue.some((newValueRow) => typeof newValueRow !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newValue;
  }
}
