/* global cy */

describe('Pokedex', function() {
  it('frontpage can be opened', function () {
    cy.visit('http://localhost:5000')

    cy.get('body').should('contain', 'pikachu')
    cy.get('body').should('contain', 'Pokémon and Pokémon character names are trademarks of Nintendo')
  })
})