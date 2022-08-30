import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import logo from '../../assets/images/pokedex.png'

const HeaderPokedex = ({}) => {

  return (
    <header className='red-rectangle-header'>
      <img className='header-img' src={logo} alt="" />
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}

export default HeaderPokedex