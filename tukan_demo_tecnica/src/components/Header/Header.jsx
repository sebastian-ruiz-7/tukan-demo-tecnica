//Import dependencies
import React from 'react'
//Import assets
import bmx from '../../assets/BMX.png'
//Import styles
import './Header.css'

export const Header = () => {
  return (
    <header className='header-container'>
        <figure>
            <img className='header__image' src={bmx} alt="Banco de México Logo" />
        </figure>

        <p className='header__text'>SISTEMA DE INFORMACIÓN ECONÓMICA</p>
    </header>
  )
}
