#!/usr/bin/node
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  (expansion1989 === undefined)? expansion1989 = 89: (expansion2019 === undefined) ? expansion2019 = 19: initialNumber + expansion1989 + expansion2019;
}
