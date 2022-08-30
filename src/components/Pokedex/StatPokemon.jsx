import React from 'react'

const StatPokemon = ({infoStat}) => {
  // console.log(infoStat);
  return (

    
    <li className='stat'>
   
    
        <p>{infoStat.base_stat}</p>
        <h4>{infoStat.stat.name}</h4> 
    
    </li>
  )
}

export default StatPokemon