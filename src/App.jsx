import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const mapResults = (({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
})))

const App = () => {
  const { data: pokemonList, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=784', mapResults)
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }
  console.log(pokemonList)
  return (
    <Routes>
      <Route exact path="/" element = {<PokemonList pokemonList={pokemonList} />}/>
      <Route path="/pokemon/:name" element={<PokemonPage pokemonList={pokemonList} /> } />
      <Route path='*' element={<div>404</div>}/>
    </Routes>
  )
}

export default App
