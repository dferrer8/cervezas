const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array') // Añadimos la libreria necesaria para sacar cerveza aleatoria

module.exports = {
  todas: cervezas,
  alzar: uniqueRandomArray(cervezas)
}
