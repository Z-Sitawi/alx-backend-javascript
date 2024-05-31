#!/usr/bin/node
export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
