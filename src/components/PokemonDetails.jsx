import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HeaderPokedex from './Pokedex/HeaderPokedex'


const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
  axios.get(URL)
  .then(res => setPokeInfo(res.data))
  .catch(err => console.log(err))
  }, [])
  
  console.log(pokeInfo)

  return (
     <div>
        <HeaderPokedex />
        <div className="card__detalles_contain">
           <div className={`card__details ${pokeInfo?.types[0].type.name}`}>
              <div className="card__details_img">
                 <img
                    className="animate__animated animate__fadeInDown"
                    src={pokeInfo?.sprites.other['official-artwork'].front_default}
                    alt=""
                 />
              </div>

              <div className="card__details_title">
                 <h1 className="card__details_name animate__animated animate__headShake">
                    {pokeInfo?.name}
                 </h1>
              </div>
           </div>

           <div className="card__details__stacks">
              {pokeInfo?.stats.map((statss) => (
                 <div className="stadisticas  animate__animated animate__flash">
                    <h2>{statss.stat.name}</h2>
                    <span>{statss['base_stat']}</span>
                 </div>
              ))}
           </div>

           <div className="card__abilities  ">
              {pokeInfo?.moves.map(
                 (habilidades, index) =>
                    index < 100 && (
                       <p
                          className="habilidades animate__animated animate__pulse"
                          key={habilidades.order}
                       >
                          {habilidades.move.name}
                       </p>
                    )
              )}
           </div>

           {/* <div className="type">
          <span className='firea'>{pokeInfo?.types[0].type.name}</span>
   </div> */}
        </div>
     </div>
  );
}

export default PokemonDetails