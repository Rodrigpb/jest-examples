import { TestScheduler } from 'jest'
import { URLSlug, hasPrefix, initials, monthName, twoDigitsNum, withTwoDecimals, removeDuplicates } from '../index'

describe('URLSlug', () => {
  test('Devuelve cosas con guiones según Plaso', () => {
    expect(URLSlug ('Rodrigo Poblacion')).toBe('rodrigo-poblacion') 
  })
})

describe('initials', () => {
  test('Pelaso dice que aqui me dan las iniciales, habrá que confiar...', () => {
    expect(initials ('Rodrigo Poblacion')).toBe('R.P.')
  })
})

 describe('monthName', () => {
   test('Este ya lo ha hecho, así que patatas...', () => {
     expect(monthName(1)).toBe('february')
   })
 })

 describe('hasPrefix', () => {
   test('Comprueba cosas', () => {
     expect(hasPrefix('Rodrigo Poblacion', 'Rod')).toBe(true)
   })
 })

describe('withTwoDecimals', () => {
  test('Según la ecuación Emc2 de Pelaso aquí me dan decimales', () => {
    expect(withTwoDecimals (3.1415)).toBe(3.14)
  })
})

describe('twoDigitsNum', () => {
  test('Se que se lo ha inventado y que no da 2 digitos, pero vamos a ver', () => {
    expect(twoDigitsNum (1)).toBe('01')
  })
})

// describe('removeDuplicates', () => {
//   test('Quita duplicidades', () => {
//     expect(['Rod', 'Rod', 'Pob']).toBe(['Rod','Pob'])
//   })
// })