'use strict'
const rando = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

module.exports = rando;
