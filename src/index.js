const cervezas = require('./cervezas.json')
// console.log(cervezas[0]);
// console.log(cervezas[0].nombre);

const uniqueRandomArray = require('unique-random-array')

module.exports = {
  todas: cervezas,
  // primera: cervezas[0]
  alzar: uniqueRandomArray(cervezas)
}
