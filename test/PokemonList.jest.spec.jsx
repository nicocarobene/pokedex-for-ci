/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonList from '../src/PokemonList'
import '@testing-library/jest-dom'

const pokemonList = [{
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  name: 'bulbasaur',
  id: 1
}, {
  url: 'https://pokeapi.co/api/v2/pokemon/133/',
  name: 'eevee',
  id: 133
}]

describe('<PokemonList />', () => {
  it('should render items', () => {
    render(
      <BrowserRouter>
        <PokemonList pokemonList={pokemonList} />
      </BrowserRouter>
    )
    expect(screen.queryByText('bulbasaur')).toBeVisible()
    expect(screen.queryByText('eevee')).toBeVisible()
  })
})
