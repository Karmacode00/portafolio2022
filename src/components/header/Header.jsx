import React from 'react'
import './header.css'
import Info from './Info'
import Photo from '../../assets/placeholder.jpg'
import Social from './Social'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola, mi nombre es</h5>
        <h1>Andrea Lafertte Ortuño</h1>
        <h5 className='text-light'>Developer</h5>
        <Info />
        <Social />

        <div className='photo'>
          <img src={Photo} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header