import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'

import HeaderPokedex from './Pokedex/HeaderPokedex'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './SearchInput'
import SelectType from './SelectType'

const Pokedex = () => {




  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
 

  const [currentBlock, setCurrentBlock] = useState(1)
  const [page, setPage] = useState(0);


  

  useEffect(() => {
    if (pokeSearch || optionType !== 'All') {
      // Aqui se hace la logica cuando el usuario busca por el input
      if (pokeSearch) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
  
        const obj = {
          results: [{url}]
        }
        setPokemons(obj)
      } else { 
        // Aqui se hace la logica de cuando el usuario quiere filtrar por tipo
        const URL = `https://pokeapi.co/api/v2/type/${optionType}`
        axios.get(URL)
          .then(res => {
            const arr = res.data.pokemon.map(e => e.pokemon)
            setPokemons({results: arr})
          })
          .catch(err => console.log(err))
      }

    } else {
      // Aqui se hace la logica cuando el usuario quiere todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=9999999999999&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }

  }, [pokeSearch, optionType])

console.log(pokemons)

  const nameTrainer = useSelector(state => state.nameTrainer)

  return (
    <div className='pokedex'>
    <HeaderPokedex/>
      <h2>Welcome <span>{nameTrainer}</span>, Catch them all.</h2>
<div className="inputs">

   <div className="filter">
          <SearchInput setPokesearch={setPokeSearch} setOptionType={setOptionType} />

          <SelectType 
          optionType={optionType} 
          setOptionType={setOptionType}
           setPage={setPage}
            setCurrentBlock={setCurrentBlock} />
   </div>
</div>

      <Pagination
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />

      <div className='cards-container'>
        {
          pokemons?.results.slice(page * 18, (page + 1) * 18).map(pokemon => (
            <PokemonCard
              key={pokemon.url}
              url={pokemon.url}
          
            />
          ))
        }
      </div>
      <Pagination
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        currentBlock={currentBlock}
        setCurrentBlock={setCurrentBlock}
      />
    </div>
  )
}

export default Pokedex