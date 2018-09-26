const utils = require('../src/utils')
const expect = require('chai').expect

/* global describe it */

describe('Modulo utils', () => {
  describe('Suma', () => {
    it('Suma de dos numeros positivos', () => { // it sirve para test
      const res = utils.suma(3, 4)
      if (res !== 7) {
        throw new Error(`Resultado esperado 7, pero se ha recibido: ${res}.`)
      }
    })
  })
  describe('Resta', () => { // Utilizo test de asercion con chai
    it('Resta de dos numeros', () => {
      expect(utils.resta(5, 3)).equal(2)
    })
  })
  describe('Multiplicacion', () => {

  })
  describe('Division', () => {

  })
})
