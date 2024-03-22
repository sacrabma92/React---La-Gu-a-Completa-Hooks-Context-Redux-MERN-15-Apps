import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {

    const id = 1
    const hero = getHeroeById(id)

    expect( hero ).toEqual(  { id: 1, name: 'Batman', owner: 'DC' })

  })

  test('getHeroeById debe retornar undefiend si no existe el id', () => {

    const id = 100
    const hero = getHeroeById(id)

    expect( hero ).toBeFalsy()

  })

  test('getHeroesByOwner debe retornar con los héroes de DC', () => {

    const owner = 'DC'
    const hero = getHeroesByOwner(owner)

    expect( hero.length ).toBe( 3 )
    expect( hero ).toEqual( heroes.filter( (hero) => hero.owner === owner ))

  })

  test('getHeroesByOwner debe retornar con los héroes de Marvel', () => {

    const owner = 'Marvel'
    const hero = getHeroesByOwner(owner)

    expect( hero.length ).toBe( 2 )
    expect( hero ).toEqual( heroes.filter( (hero) => hero.owner === owner ))

  })
  
})
