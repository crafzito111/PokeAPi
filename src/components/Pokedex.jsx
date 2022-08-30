import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import HeaderPokedex from './Pokedex/HeaderPokedex'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './SearchInput'
import SelectType from './SelectType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState()

  useEffect(() => {
    if (pokeSearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [
          {
            url
          }
        ]
      }
      setPokemons(obj)

    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch])

 

  const nameTrainer = useSelector(state => state.nameTrainer)

  return (
    <div>
    <HeaderPokedex/>
      <h2>Welcome {nameTrainer}, Catch them all.</h2>
<div className="inputs">

   <div className="filter">
          <SearchInput setPokesearch={setPokeSearch} />

          <SelectType />
   </div>
</div>


      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex