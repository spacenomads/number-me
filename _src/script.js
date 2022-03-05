'use strict'
const STR = 'Carlos';
const DIAL_PAD = {
  "a": 2,
  "b": 2,
  "c": 2,
  "d": 3,
  "e": 3,
  "f": 3,
  "g": 4,
  "h": 4,
  "i": 4,
  "j": 5,
  "k": 5,
  "l": 5,
  "m": 6,
  "n": 6,
  "o": 6,
  "p": 7,
  "q": 7,
  "r": 7,
  "s": 7,
  "t": 8,
  "u": 8,
  "v": 8,
  "w": 9,
  "k": 9,
  "y": 9,
  "z": 9,
}


function sumDigits(acc, val) {
  return acc + val;
}


function cleanString(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}


function sumLetters(str) {
  const resultSRT = cleanString(str);
  console.log(resultSRT);
  return resultSRT
    .split('')
    .map(letter => DIAL_PAD[letter] || 0)
    .reduce(sumDigits, 0);
}


function reduceToOne(number) {
  let result = number;
  while ((result >= 10)) {
    result = result
      .toString()
      .split('')
      .map(Number)
      .reduce(sumDigits, 0);
  }
  
  return result;
}

const sum = sumLetters(STR);
const r = reduceToOne(sum);
console.log({sum, r});