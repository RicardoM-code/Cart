import React from 'react'
import CartButton from '../CartButton/CartButton'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <SearchBar/>
            <CartButton/>
        </div>

    </div>
  )
}

export default Header