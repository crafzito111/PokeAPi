import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeaderPokedex from './HeaderPokedex';
import StatPokemon from './StatPokemon';
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({ url }) => {
   const [pokemon, setPokemon] = useState();


   const navigate = useNavigate()

   useEffect(() => {
      axios.get(url)
         .then(res => setPokemon(res.data))
         .catch(err => console.log(err))
   }, [])

   const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

   return (
      <div onClick={handleClick} className="card">
         <div className={pokemon?.types[0].type.name}></div>
         <div className="card__img">
            <img src={pokemon?.sprites.other['official-artwork']['front_default']} alt="" />
         </div>
         <div className="card__title">
            <h3>{pokemon?.name}</h3>
         </div>
         <div className="card__type">
            {pokemon?.types.map((slot) => (
               <li key={slot.type.url}>{slot.type.name}</li>
            ))}
         </div>

         <hr />

         <div className="card__stacts">
            <ul>
               {pokemon?.stats.map((stat) => (
                  <StatPokemon key={stat.stat.url} infoStat={stat} />
               ))}{' '}
            </ul>
         </div>
      </div>
   );

   // <article>
   //   <header>
   //
   //   </header>
   //   <section className='body'>
   //     <h3 className={pokemon?.types[0].type.name}>{pokemon?.name}</h3>

   //   </section>

   //   <footer>

   //
   //   </footer>
   // </article>
};

export default PokemonCard;
