#!/usr/bin/node
export default class Currency {
  /* eslint-disable no-underscore-dangle */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newVal) {
    this._name = newVal;
  }

  set code(newVal) {
    this._code = newVal;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
