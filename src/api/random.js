'use strict'
const rando = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
  console.log('Arrrrrrr', arr);
};
// console.log('rando: ', rando)
console.log('Hitting Random.js');

module.exports = rando;
