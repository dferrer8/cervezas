const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array') // Añadimos la libreria necesaria para sacar cerveza aleatoria
const _ = require('lodash')

module.exports = {
  todas: cervezas,
  todasOrdenadas: _.sortBy(cervezas, ['nombre']),
  alzar: uniqueRandomArray(cervezas)
}
